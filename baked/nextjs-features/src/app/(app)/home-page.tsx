import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            Overview
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Each section demonstrates a core Next.js capability, wrapped in a
            modern app shell (sidebar, theme toggle, auth pages).
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
          title="Import Nmap → Assets"
          href="/assets"
          description="Upload Nmap output, parse it server-side, and store assets with open ports."
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

      <div className="rounded-2xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Tip: demo auth is enabled.</p>
        <p className="mt-1">
          Routes in the app shell require a cookie-based demo login. You can
          inspect cookies in DevTools → Application → Cookies.
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
      className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:bg-muted/40"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-base font-semibold tracking-tight">{props.title}</h2>
        <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {props.description}
      </p>
    </Link>
  );
}
