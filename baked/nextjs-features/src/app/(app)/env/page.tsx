export const metadata = {
  title: "Environment variables",
};

export default function EnvPage() {
  const publicValue = process.env.NEXT_PUBLIC_DEMO_VALUE ?? "(not set)";
  const serverOnlyValue = process.env.DEMO_SERVER_SECRET ? "(set)" : "(not set)";

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Env</h1>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Demo of public vs server-only env variables.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-black/10 bg-white p-5 text-sm dark:border-white/10 dark:bg-black">
          <div className="text-zinc-700 dark:text-zinc-300">NEXT_PUBLIC_DEMO_VALUE</div>
          <div className="mt-2 font-mono">{publicValue}</div>
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-5 text-sm dark:border-white/10 dark:bg-black">
          <div className="text-zinc-700 dark:text-zinc-300">DEMO_SERVER_SECRET</div>
          <div className="mt-2 font-mono">{serverOnlyValue}</div>
          <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
            (We don’t print secrets; just whether it’s set.)
          </p>
        </div>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Set them when running dev:
        <span className="ml-2 font-mono">NEXT_PUBLIC_DEMO_VALUE=hello DEMO_SERVER_SECRET=1</span>
      </p>
    </div>
  );
}
