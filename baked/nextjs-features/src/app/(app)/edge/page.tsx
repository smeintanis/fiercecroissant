import { headers } from "next/headers";

export const runtime = "edge";

export const metadata = {
  title: "Edge runtime",
};

export default async function EdgePage() {
  const h = await headers();
  const ua = h.get("user-agent") ?? "(unknown)";
  const forwardedFor = h.get("x-forwarded-for") ?? "";

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Edge runtime</h1>
        <p className="text-sm text-muted-foreground">
          This page runs with <code>runtime = &quot;edge&quot;</code>.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 text-sm shadow-sm">
        <div className="text-muted-foreground">User-Agent</div>
        <pre className="mt-2 overflow-auto rounded-lg bg-muted/40 p-3 text-xs">
{ua}
        </pre>
        {forwardedFor ? (
          <p className="mt-3 text-xs text-muted-foreground">
            x-forwarded-for: {forwardedFor}
          </p>
        ) : null}
      </div>
    </div>
  );
}
