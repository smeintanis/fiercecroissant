import { cookies } from "next/headers";

import { logout } from "@/app/(auth)/actions";
import { AppShell } from "@/components/AppShell";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jar = await cookies();
  const email = jar.get("next_demo_email")?.value ?? null;

  return (
    <AppShell
      userLabel={email}
      onLogout={
        <form action={logout}>
          <button className="rounded-lg border border-border bg-card px-3 py-2 text-sm hover:bg-muted">
            Log out
          </button>
        </form>
      }
    >
      {children}
    </AppShell>
  );
}
