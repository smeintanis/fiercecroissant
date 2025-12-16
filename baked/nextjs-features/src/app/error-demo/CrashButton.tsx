"use client";

import { useState } from "react";

export default function CrashButton() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Deliberate client render error from /error-demo");
  }

  return (
    <button
      className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background"
      onClick={() => setCrash(true)}
    >
      Trigger error
    </button>
  );
}
