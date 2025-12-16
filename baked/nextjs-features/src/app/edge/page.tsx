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
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          This page runs with <code>runtime = "edge"</code>.
        </p>
      </div>

      <div className="rounded-xl border border-black/10 bg-white p-5 text-sm dark:border-white/10 dark:bg-black">
        <div className="text-zinc-700 dark:text-zinc-300">User-Agent</div>
        <pre className="mt-2 overflow-auto rounded-lg bg-zinc-50 p-3 text-xs dark:bg-white/5">
{ua}
        </pre>
        {forwardedFor ? (
          <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400">
            x-forwarded-for: {forwardedFor}
          </p>
        ) : null}
      </div>
    </div>
  );
}
