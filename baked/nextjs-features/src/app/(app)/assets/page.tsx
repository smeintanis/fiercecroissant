import { readAssetsStore } from "@/lib/assets-store";
import { clearAssets, importNmap } from "./actions";

export const metadata = {
  title: "Assets",
};

export default async function AssetsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const imported = typeof sp.imported === "string" ? sp.imported : null;
  const cleared = typeof sp.cleared === "string" ? sp.cleared : null;
  const error = typeof sp.error === "string" ? sp.error : null;

  const store = await readAssetsStore();

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Assets</h1>
        <p className="text-sm text-muted-foreground">
          Upload Nmap output and import hosts as assets with open ports.
        </p>
      </div>

      {(imported || cleared || error) && (
        <div className="rounded-2xl border border-border bg-muted/40 p-4 text-sm">
          {imported && (
            <p>
              Imported <span className="font-medium">{imported}</span> asset
              {imported === "1" ? "" : "s"}.
            </p>
          )}
          {cleared && <p>Cleared all imported assets.</p>}
          {error === "missing_file" && <p>Please choose a file to upload.</p>}
        </div>
      )}

      <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-base font-semibold tracking-tight">
          Import Nmap output
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Supported: common “normal” output (<code>-oN</code>) and grepable output
          (<code>-oG</code>). Only <code>open</code> ports are imported.
        </p>

        <form
          action={importNmap}
          className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <input
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
            type="file"
            name="nmapFile"
            accept=".txt,.log,.nmap,.gnmap,text/plain"
            required
          />
          <button className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background">
            Import
          </button>
        </form>

        <form action={clearAssets} className="mt-3">
          <button className="text-sm underline text-muted-foreground">
            Clear all
          </button>
        </form>
      </section>

      <section className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold tracking-tight">
              Imported assets
            </h2>
            <p className="text-sm text-muted-foreground">
              {store.assets.length} asset{store.assets.length === 1 ? "" : "s"}
              {store.updatedAt ? ` • Updated ${new Date(store.updatedAt).toLocaleString()}` : ""}
            </p>
          </div>
        </div>

        {store.assets.length === 0 ? (
          <div className="rounded-2xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
            No assets yet. Upload an Nmap output file above.
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/40 text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">Asset</th>
                  <th className="px-4 py-3 font-medium">Open ports</th>
                </tr>
              </thead>
              <tbody>
                {store.assets.map((a) => (
                  <tr
                    key={a.key}
                    className="border-t border-border align-top"
                  >
                    <td className="px-4 py-3">
                      <div className="font-medium">{a.target}</div>
                      {a.address && (
                        <div className="text-xs text-muted-foreground">
                          {a.address}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-2">
                        {a.ports.map((p) => (
                          <span
                            key={`${a.key}-${p.port}-${p.protocol}-${p.service ?? ""}`}
                            className="rounded-full border border-border bg-background px-2 py-1 text-xs"
                            title={p.version ?? ""}
                          >
                            {p.port}/{p.protocol}
                            {p.service ? ` • ${p.service}` : ""}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
