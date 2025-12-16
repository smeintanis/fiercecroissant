import Link from "next/link";

import { login } from "@/app/(auth)/actions";

export const metadata = {
  title: "Log in",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const error = typeof sp.error === "string" ? sp.error : null;
  const next = typeof sp.next === "string" ? sp.next : "";

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          This is a demo login that sets a cookie.
        </p>
      </div>

      {error === "missing" ? (
        <div className="rounded-xl border border-border bg-muted/40 p-4 text-sm">
          Please enter an email and password.
        </div>
      ) : null}

      <form
        action={login}
        className="rounded-2xl border border-border bg-card p-6 shadow-sm"
      >
        <input type="hidden" name="next" value={next} />
        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
            placeholder="you@company.com"
          />
        </label>

        <label className="mt-4 block">
          <span className="text-sm font-medium">Password</span>
          <input
            name="password"
            type="password"
            required
            className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
            placeholder="••••••••"
          />
        </label>

        <button className="mt-6 w-full rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background">
          Log in
        </button>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          No account?{" "}
          <Link href="/register" className="text-foreground underline underline-offset-4">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
}
