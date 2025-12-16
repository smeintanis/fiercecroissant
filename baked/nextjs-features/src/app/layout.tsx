import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Core Features",
    template: "%s | Next.js Core Features",
  },
  description: "A small Next.js app showcasing the framework’s core features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-dvh bg-background text-foreground">
          <header className="border-b border-black/10 dark:border-white/10">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
              <Link href="/" className="font-semibold tracking-tight">
                Next.js Core Features
              </Link>
              <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <Link className="hover:underline" href="/blog">
                  Blog (dynamic routes)
                </Link>
                <Link className="hover:underline" href="/assets">
                  Assets (Nmap import)
                </Link>
                <Link className="hover:underline" href="/dashboard">
                  Dashboard (server actions)
                </Link>
                <Link className="hover:underline" href="/streaming">
                  Streaming
                </Link>
                <Link className="hover:underline" href="/edge">
                  Edge runtime
                </Link>
                <Link className="hover:underline" href="/env">
                  Env
                </Link>
              </nav>
            </div>
          </header>
          <main className="mx-auto w-full max-w-5xl px-6 py-10">
            {children}
          </main>
          <footer className="border-t border-black/10 py-8 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400">
            <div className="mx-auto max-w-5xl px-6">
              Built to demonstrate: App Router, RSC, route handlers, middleware,
              metadata, images/fonts, streaming, errors, and edge runtime.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
