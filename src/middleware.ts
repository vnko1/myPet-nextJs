import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isAuth = false;

export default function middleware(request: NextRequest) {
  if (!isAuth) return NextResponse.redirect(new URL("/login", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!sponsors|friends|login|register|api|_next/static|_next/image|news|.webp|favicon.ico|.*\\.webp$|$).*)",
  ],
};
