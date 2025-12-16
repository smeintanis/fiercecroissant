"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { ThemeToggle } from "@/components/ThemeToggle";

type NavItem = { href: string; label: string; description?: string };

function useNav() {
  return useMemo<NavItem[]>(
    () => [
      { href: "/app", label: "Overview", description: "Getting started" },
      { href: "/assets", label: "Assets", description: "Import Nmap → assets" },
      { href: "/dashboard", label: "Dashboard", description: "Server Actions" },
      { href: "/blog", label: "Blog", description: "Dynamic routes + metadata" },
      { href: "/streaming", label: "Streaming", description: "Suspense + loading" },
      { href: "/env", label: "Env", description: "Environment variables" },
      { href: "/edge", label: "Edge", description: "Edge runtime" },
      { href: "/error-demo", label: "Error demo", description: "Error boundary" },
    ],
    [],
  );
}

export function AppShell({
  children,
  userLabel,
  onLogout,
}: {
  children: React.ReactNode;
  userLabel?: string | null;
  onLogout?: React.ReactNode;
}) {
  const pathname = usePathname();
  const nav = useNav();
  const [open, setOpen] = useState(false);

  const sidebar = (
    <aside className="flex h-full w-72 flex-col border-r border-border bg-card">
      <div className="flex items-center justify-between gap-3 px-4 py-4">
        <Link href="/app" className="font-semibold tracking-tight">
          FierceCroissant
        </Link>
        <ThemeToggle className="hidden sm:inline-flex" />
      </div>

      <div className="px-4">
        <div className="rounded-xl border border-border bg-muted/40 p-3">
          <div className="text-xs font-medium text-muted-foreground">Signed in</div>
          <div className="mt-1 truncate text-sm font-semibold">
            {userLabel ?? "demo@local"}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <ThemeToggle className="sm:hidden" />
            {onLogout}
          </div>
        </div>
      </div>

      <nav className="mt-4 flex-1 space-y-1 px-2">
        {nav.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={
                "flex items-start gap-3 rounded-xl px-3 py-2 transition-colors " +
                (active
                  ? "bg-foreground text-background"
                  : "text-foreground/90 hover:bg-muted")
              }
            >
              <div className="min-w-0">
                <div className="text-sm font-medium">{item.label}</div>
                {item.description ? (
                  <div
                    className={
                      "text-xs " +
                      (active ? "text-background/80" : "text-muted-foreground")
                    }
                  >
                    {item.description}
                  </div>
                ) : null}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border px-4 py-4 text-xs text-muted-foreground">
        App Router • RSC • Server Actions • Route Handlers • Middleware
      </div>
    </aside>
  );

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Mobile topbar */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/80 px-4 py-3 backdrop-blur sm:hidden">
        <button
          type="button"
          className="rounded-lg border border-border bg-card px-3 py-2 text-sm"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
        <Link href="/app" className="text-sm font-semibold tracking-tight">
          FierceCroissant
        </Link>
        <div className="w-[60px]" />
      </header>

      <div className="mx-auto flex w-full max-w-[1400px]">
        <div className="hidden h-dvh w-72 sm:block">{sidebar}</div>

        {/* Mobile drawer */}
        {open ? (
          <div className="fixed inset-0 z-40 sm:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setOpen(false)}
            />
            <div className="absolute inset-y-0 left-0 w-80 shadow-2xl">
              {sidebar}
            </div>
          </div>
        ) : null}

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-8 sm:py-10">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
