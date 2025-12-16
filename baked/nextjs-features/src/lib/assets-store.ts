import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";

import type { NmapAsset } from "@/lib/nmap";

export type AssetsStore = {
  updatedAt: string | null;
  assets: NmapAsset[];
};

function storePath() {
  // On some serverless platforms (e.g. Vercel), the filesystem is read-only
  // except for /tmp. Prefer a writable location when deployed.
  if (process.env.VERCEL) {
    return path.join(os.tmpdir(), "nextjs-features-assets.json");
  }
  return path.join(process.cwd(), "data", "assets.json");
}

export async function readAssetsStore(): Promise<AssetsStore> {
  const p = storePath();
  try {
    const raw = await fs.readFile(p, "utf8");
    const parsed = JSON.parse(raw) as AssetsStore;
    return {
      updatedAt: parsed.updatedAt ?? null,
      assets: Array.isArray(parsed.assets) ? parsed.assets : [],
    };
  } catch {
    return { updatedAt: null, assets: [] };
  }
}

export async function writeAssetsStore(next: AssetsStore) {
  const p = storePath();
  await fs.mkdir(path.dirname(p), { recursive: true });
  await fs.writeFile(p, JSON.stringify(next, null, 2) + "\n", "utf8");
}

export function mergeAssets(existing: NmapAsset[], incoming: NmapAsset[]) {
  const byKey = new Map<string, NmapAsset>();
  for (const a of existing) byKey.set(a.key, a);

  for (const a of incoming) {
    const prev = byKey.get(a.key);
    if (!prev) {
      byKey.set(a.key, a);
      continue;
    }
    const ports = [...(prev.ports ?? []), ...(a.ports ?? [])];
    const seen = new Set<string>();
    prev.ports = ports.filter((p) => {
      const k = `${p.port}/${p.protocol}/${p.state}/${p.service ?? ""}/${p.version ?? ""}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }

  return [...byKey.values()].sort((a, b) => a.key.localeCompare(b.key));
}
