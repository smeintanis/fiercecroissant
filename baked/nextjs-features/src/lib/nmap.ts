export type NmapPort = {
  port: number;
  protocol: string;
  state: string;
  service?: string;
  version?: string;
};

export type NmapAsset = {
  key: string;
  target: string;
  address?: string;
  ports: NmapPort[];
};

function uniqPorts(ports: NmapPort[]) {
  const seen = new Set<string>();
  const out: NmapPort[] = [];
  for (const p of ports) {
    const k = `${p.port}/${p.protocol}/${p.state}/${p.service ?? ""}/${p.version ?? ""}`;
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(p);
  }
  return out.sort((a, b) => a.port - b.port || a.protocol.localeCompare(b.protocol));
}

function parseTarget(raw: string): { target: string; address?: string } {
  const trimmed = raw.trim();
  const m = /^(.*)\s+\(([^)]+)\)$/.exec(trimmed);
  if (m) {
    return { target: m[1].trim(), address: m[2].trim() };
  }
  // If it looks like an IP, treat as address too.
  const ipLike = /^\d{1,3}(?:\.\d{1,3}){3}$/.test(trimmed) || /:/.test(trimmed);
  return { target: trimmed, address: ipLike ? trimmed : undefined };
}

function assetKeyFor(target: string, address?: string) {
  return (address ?? target).toLowerCase();
}

// Supports common Nmap outputs:
// - "Normal" output (-oN)
// - Grepable output (-oG)
// XML (-oX) is not fully supported (kept simple on purpose).
export function parseNmapOutput(input: string): NmapAsset[] {
  const lines = input.replace(/\r\n/g, "\n").split("\n");

  const assets: NmapAsset[] = [];
  let current: NmapAsset | null = null;

  const flush = () => {
    if (!current) return;
    current.ports = uniqPorts(current.ports.filter((p) => p.state === "open"));
    if (current.ports.length > 0) assets.push(current);
    current = null;
  };

  for (const line of lines) {
    const l = line.trimEnd();

    // Grepable output (-oG)
    if (l.startsWith("Host:")) {
      // Example: Host: 10.0.0.1 ()	Ports: 22/open/tcp//ssh///, 80/open/tcp//http///
      const hm = /^Host:\s+([^\s]+)\s+\(([^)]*)\)\s+Ports:\s+(.*)$/.exec(l);
      if (hm) {
        flush();
        const address = hm[1].trim();
        const target = hm[2].trim() || address;
        current = {
          key: assetKeyFor(target, address),
          target,
          address,
          ports: [],
        };

        const portsPart = hm[3];
        for (const chunk of portsPart.split(",")) {
          const c = chunk.trim();
          if (!c) continue;
          // port/state/proto/owner/service/sunrpcinfo/version
          const pm = /^(\d+)\/(open|closed|filtered)\/([a-z]+)\/[^/]*\/([^/]*)\/[^/]*\/(.*)$/.exec(
            c,
          );
          if (!pm) continue;
          current.ports.push({
            port: Number(pm[1]),
            state: pm[2],
            protocol: pm[3],
            service: pm[4] || undefined,
            version: pm[5]?.trim() || undefined,
          });
        }
        continue;
      }
    }

    // Normal output (-oN)
    if (l.startsWith("Nmap scan report for ")) {
      flush();
      const raw = l.replace(/^Nmap scan report for\s+/, "");
      const { target, address } = parseTarget(raw);
      current = {
        key: assetKeyFor(target, address),
        target,
        address,
        ports: [],
      };
      continue;
    }

    if (!current) continue;

    // Port table row: "22/tcp  open  ssh  OpenSSH 8.9p1 Ubuntu"
    const row = /^(\d+)\/(tcp|udp)\s+(open|closed|filtered)\s+([^\s]+)(?:\s+(.*))?$/.exec(
      l.trim(),
    );
    if (row) {
      current.ports.push({
        port: Number(row[1]),
        protocol: row[2],
        state: row[3],
        service: row[4] || undefined,
        version: row[5]?.trim() || undefined,
      });
      continue;
    }

    // Next host begins after summary or blank lines; we rely on explicit markers.
  }

  flush();

  // Deduplicate assets (by key) and merge ports.
  const byKey = new Map<string, NmapAsset>();
  for (const a of assets) {
    const existing = byKey.get(a.key);
    if (!existing) {
      byKey.set(a.key, a);
      continue;
    }
    existing.ports = uniqPorts([...existing.ports, ...a.ports]);
  }

  return [...byKey.values()].sort((a, b) => a.key.localeCompare(b.key));
}
