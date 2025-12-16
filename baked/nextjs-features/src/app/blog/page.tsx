import Link from "next/link";

import { posts } from "@/app/blog/posts";

export const metadata = {
  title: "Blog",
};

export default function BlogIndex() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Demo of dynamic routes, static generation, and per-page metadata.
        </p>
      </div>

      <div className="grid gap-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-xl border border-black/10 bg-white p-5 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:bg-black dark:hover:bg-white/5"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-base font-semibold tracking-tight">{p.title}</h2>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {p.date}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              {p.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
