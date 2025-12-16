"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const COOKIE = "next_demo_counter";

export async function increment() {
  const jar = await cookies();
  const current = Number(jar.get(COOKIE)?.value ?? "0") || 0;
  jar.set(COOKIE, String(current + 1), { path: "/", sameSite: "lax" });
  revalidatePath("/dashboard");
}

export async function resetCounter() {
  const jar = await cookies();
  jar.set(COOKIE, "0", { path: "/", sameSite: "lax" });
  revalidatePath("/dashboard");
}
