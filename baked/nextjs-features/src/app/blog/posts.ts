export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
};

export const posts: Post[] = [
  {
    slug: "app-router",
    title: "App Router basics",
    excerpt: "Routes are just folders; UI is composed per segment.",
    date: "2025-12-16",
    body: `The App Router is built around React Server Components.

- Filesystem routing: \\`app/blog/[slug]/page.tsx\\`
- Layouts: \\`layout.tsx\\`
- Loading/error/not-found per segment

This post is statically generated using \\`generateStaticParams()\\`.
`,
  },
  {
    slug: "route-handlers",
    title: "Route handlers",
    excerpt: "Build APIs inside app/ with Request/Response primitives.",
    date: "2025-12-16",
    body: `Route Handlers live under \\`app/api/*/route.ts\\`.

In this demo, \\`/api/time\\` returns JSON with the current timestamp.
`,
  },
  {
    slug: "server-actions",
    title: "Server Actions",
    excerpt: "Mutations from forms without writing a separate API.",
    date: "2025-12-16",
    body: `Server Actions run on the server and can be wired directly to a \\`<form action={...}>\\`.

See \\`/dashboard\\` and \\`/assets\\` for examples.
`,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null;
}
