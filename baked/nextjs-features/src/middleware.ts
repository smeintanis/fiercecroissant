import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
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
