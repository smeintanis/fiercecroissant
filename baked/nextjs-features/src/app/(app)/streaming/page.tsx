import { Suspense } from "react";

export const metadata = {
  title: "Streaming",
};

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function TimeCard() {
  await sleep(1200);
  // Keep this demo self-contained: render server time after a delay.
  const data = { iso: new Date().toISOString() };

  return (
    <div className="rounded-xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-black">
      <div className="text-sm text-zinc-700 dark:text-zinc-300">Server time</div>
      <div className="mt-1 font-mono text-sm">{data?.iso ?? "(unavailable)"}</div>
    </div>
  );
}

export default function StreamingPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Streaming</h1>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Demo of streaming server components with a Suspense boundary.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="rounded-xl border border-black/10 bg-zinc-50 p-5 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            Waiting for the server component…
          </div>
        }
      >
        {/* Intentionally delayed */}
        <TimeCard />
      </Suspense>
    </div>
  );
}
