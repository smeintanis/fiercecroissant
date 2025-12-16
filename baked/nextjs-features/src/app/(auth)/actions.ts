"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AUTH_COOKIE = "next_demo_auth";
const EMAIL_COOKIE = "next_demo_email";

export async function login(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();
  const next = String(formData.get("next") ?? "").trim();

  if (!email || !password) {
    redirect("/login?error=missing");
  }

  const jar = await cookies();
  jar.set(AUTH_COOKIE, "1", { path: "/", sameSite: "lax" });
  jar.set(EMAIL_COOKIE, email, { path: "/", sameSite: "lax" });
  redirect(next && next.startsWith("/") ? next : "/assets");
}

export async function register(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();
  const next = String(formData.get("next") ?? "").trim();

  if (!email || password.length < 6) {
    redirect("/register?error=invalid");
  }

  const jar = await cookies();
  jar.set(AUTH_COOKIE, "1", { path: "/", sameSite: "lax" });
  jar.set(EMAIL_COOKIE, email, { path: "/", sameSite: "lax" });
  redirect(next && next.startsWith("/") ? next : "/assets");
}

export async function logout() {
  const jar = await cookies();
  jar.set(AUTH_COOKIE, "", { path: "/", maxAge: 0 });
  jar.set(EMAIL_COOKIE, "", { path: "/", maxAge: 0 });
  redirect("/");
}
