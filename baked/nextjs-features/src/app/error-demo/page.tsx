import CrashButton from "./CrashButton";

export const metadata = {
  title: "Error demo",
};

export default function ErrorDemoPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Error demo</h1>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Click the button to trigger a render-time error that is caught by this
          route segment’s <code>error.tsx</code>.
        </p>
      </div>

      {/* Client component triggers error on demand */}
      <CrashButton />
    </div>
  );
}
