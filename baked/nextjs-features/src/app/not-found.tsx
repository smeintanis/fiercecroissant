import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold tracking-tight">Not found</h1>
      <p className="text-muted-foreground">
        This route doesn’t exist (or the requested resource couldn’t be found).
      </p>
      <Link className="text-sm underline" href="/">
        ← Back home
      </Link>
    </div>
  );
}
