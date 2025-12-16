import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            Next.js Core Features (App Router)
          </h1>
          <p className="max-w-2xl text-zinc-700 dark:text-zinc-300">
            This tiny app is intentionally “feature-first”: each route exists to
            demonstrate one important Next.js capability.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={110}
            height={24}
            priority
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FeatureCard
          title="Dynamic routes + metadata"
          href="/blog"
          description="SSG via generateStaticParams, per-page generateMetadata, and notFound()."
        />
        <FeatureCard
          title="Server Actions"
          href="/dashboard"
          description="Form posts to a server action; state persists in cookies for the demo."
        />
        <FeatureCard
          title="Route handlers (API)"
          href="/api/time"
          description="app/api/* Route Handlers returning JSON (also used by other pages)."
        />
        <FeatureCard
          title="Streaming + Suspense"
          href="/streaming"
          description="Server components streaming with Suspense boundaries and a route-level loading UI."
        />
        <FeatureCard
          title="Edge runtime"
          href="/edge"
          description="A page running in the Edge runtime, reading request headers."
        />
        <FeatureCard
          title="Environment variables"
          href="/env"
          description="Using NEXT_PUBLIC_* and server-only environment reads."
        />
        <FeatureCard
          title="Error boundaries"
          href="/error-demo"
          description="Route-segment error.tsx catching a deliberate error."
        />
      </div>

      <div className="rounded-xl border border-black/10 bg-zinc-50 p-5 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
        <p className="font-medium text-zinc-900 dark:text-zinc-50">
          Tip: middleware is enabled.
        </p>
        <p className="mt-1">
          The middleware sets a cookie the first time you visit; open DevTools →
          Application → Cookies to see it.
        </p>
      </div>
    </div>
  );
}

function FeatureCard(props: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={props.href}
      className="group rounded-xl border border-black/10 bg-white p-5 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:bg-black dark:hover:bg-white/5"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-base font-semibold tracking-tight">{props.title}</h2>
        <span className="text-zinc-400 transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </div>
      <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {props.description}
      </p>
    </Link>
  );
}
