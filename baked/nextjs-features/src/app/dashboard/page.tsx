import { cookies } from "next/headers";

import { increment, resetCounter } from "@/app/dashboard/actions";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const jar = await cookies();
  const count = Number(jar.get("next_demo_counter")?.value ?? "0") || 0;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Demo of Server Actions mutating state stored in cookies.
        </p>
      </div>

      <div className="rounded-xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-black">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-sm text-zinc-700 dark:text-zinc-300">Count</div>
            <div className="text-3xl font-semibold tracking-tight">{count}</div>
          </div>
          <div className="flex items-center gap-3">
            <form action={increment}>
              <button className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background">
                Increment
              </button>
            </form>
            <form action={resetCounter}>
              <button className="rounded-lg border border-black/10 px-4 py-2 text-sm font-medium dark:border-white/10">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        This is intentionally simple: the point is wiring a form directly to a
        server function without creating a separate API endpoint.
      </p>
    </div>
  );
}
