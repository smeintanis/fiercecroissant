"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Something went wrong</h1>
      <p className="text-sm text-zinc-700 dark:text-zinc-300">{error.message}</p>
      <div className="flex items-center gap-3">
        <button
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background"
          onClick={() => reset()}
        >
          Try again
        </button>
        <Link className="text-sm underline" href="/">
          Back home
        </Link>
      </div>
    </div>
  );
}
