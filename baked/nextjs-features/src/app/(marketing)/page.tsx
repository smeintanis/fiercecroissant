import Link from "next/link";

export const metadata = {
  title: "Welcome",
};

export default function SplashPage() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.20),transparent_60%)]" />
        <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="absolute -bottom-32 -right-52 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.16),transparent_60%)]" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Modern Next.js feature showcase
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Scan smarter.
            <br />
            Import Nmap.
            <br />
            Track assets.
          </h1>

          <p className="max-w-xl text-pretty text-base leading-7 text-muted-foreground">
            A clean, modern UI built on the Next.js App Router. Includes Server Actions,
            Route Handlers, Streaming, Middleware, and an Nmap → Assets importer.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/register"
              className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background"
            >
              Get started
            </Link>
            <Link
              href="/login"
              className="rounded-lg border border-border bg-card px-4 py-2 text-sm hover:bg-muted"
            >
              Log in
            </Link>
            <Link
              href="/assets"
              className="text-sm font-medium text-foreground/90 underline underline-offset-4"
            >
              Explore demo →
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-background/60 p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <Feature title="Assets" body="Upload Nmap output and auto-extract open ports." />
            <Feature title="Server Actions" body="Mutations from forms without a separate API." />
            <Feature title="Streaming" body="Suspense + route loading UI." />
            <Feature title="Edge" body="Run selected routes at the edge." />
          </div>
          <div className="mt-4 rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground">
            Tip: this is a demo login (cookie-based). No real auth or database.
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="text-sm font-semibold tracking-tight">{title}</div>
      <div className="mt-1 text-sm text-muted-foreground">{body}</div>
    </div>
  );
}
