import Link from "next/link";

import { ThemeToggle } from "@/components/ThemeToggle";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <Link href="/" className="font-semibold tracking-tight">
            FierceCroissant
          </Link>
          <nav className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/login"
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm hover:bg-muted"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-foreground px-3 py-2 text-sm font-medium text-background"
            >
              Create account
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-6 py-12">{children}</main>
      <footer className="border-t border-border py-10 text-sm text-muted-foreground">
        <div className="mx-auto max-w-6xl px-6">
          Next.js demo app: App Router, RSC, Server Actions, Route Handlers, Middleware, Streaming.
        </div>
      </footer>
    </div>
  );
}
