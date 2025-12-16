"use client";

import { useTheme } from "next-themes";

export function ThemeToggle({
  className,
  variant = "ghost",
}: {
  className?: string;
  variant?: "ghost" | "solid";
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const current = (resolvedTheme ?? theme) === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={
        (variant === "solid"
          ? "rounded-lg bg-foreground px-3 py-2 text-sm font-medium text-background"
          : "rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground/90 hover:bg-muted") +
        (className ? ` ${className}` : "")
      }
      onClick={() => setTheme(next)}
    >
      {current === "dark" ? "Dark" : "Light"}
    </button>
  );
}
