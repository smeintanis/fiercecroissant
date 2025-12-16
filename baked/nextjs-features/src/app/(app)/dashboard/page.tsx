import { cookies } from "next/headers";

import { increment, resetCounter } from "./actions";

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
        <p className="text-sm text-muted-foreground">
          Demo of Server Actions mutating state stored in cookies.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Count</div>
            <div className="text-3xl font-semibold tracking-tight">{count}</div>
          </div>
          <div className="flex items-center gap-3">
            <form action={increment}>
              <button className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background">
                Increment
              </button>
            </form>
            <form action={resetCounter}>
              <button className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted/40">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        This is intentionally simple: the point is wiring a form directly to a
        server function without creating a separate API endpoint.
      </p>
    </div>
  );
}
