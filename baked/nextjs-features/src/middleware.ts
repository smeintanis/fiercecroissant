import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE = "next_demo_auth";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow public routes.
  if (
    pathname === "/" ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  ) {
    const res = NextResponse.next();
    if (!req.cookies.get("next_demo_visited")?.value) {
      res.cookies.set("next_demo_visited", "1", { path: "/", sameSite: "lax" });
    }
    return res;
  }

  // Demo auth gate for the app area.
  if (!req.cookies.get(AUTH_COOKIE)?.value) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  const res = NextResponse.next();

  // Simple demo: mark first visit with a cookie.
  if (!req.cookies.get("next_demo_visited")?.value) {
    res.cookies.set("next_demo_visited", "1", {
      path: "/",
      sameSite: "lax",
    });
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
