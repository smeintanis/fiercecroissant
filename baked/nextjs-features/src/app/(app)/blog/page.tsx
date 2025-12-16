import Link from "next/link";

import { posts } from "./posts";

export const metadata = {
  title: "Blog",
};

export default function BlogIndex() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
        <p className="text-sm text-muted-foreground">
          Demo of dynamic routes, static generation, and per-page metadata.
        </p>
      </div>

      <div className="grid gap-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:bg-muted/40"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-base font-semibold tracking-tight">{p.title}</h2>
              <span className="text-xs text-muted-foreground">
                {p.date}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {p.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
