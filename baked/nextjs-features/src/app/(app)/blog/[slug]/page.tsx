import { notFound } from "next/navigation";

import { getPost, posts } from "../posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const post = getPost(slug);
    if (!post) return { title: "Post not found" };
    return { title: post.title, description: post.excerpt };
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="prose prose-zinc max-w-none dark:prose-invert">
      <h1>{post.title}</h1>
      <p className="!mt-0 text-sm text-zinc-600 dark:text-zinc-400">
        {post.date}
      </p>
      {post.body.split("\n").map((line, i) =>
        line.trim() ? <p key={i}>{line}</p> : <br key={i} />,
      )}
    </article>
  );
}
