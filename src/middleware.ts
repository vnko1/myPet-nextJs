import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isAuth = false;

export default function middleware(request: NextRequest) {
  if (!isAuth) return NextResponse.rewrite(new URL("/register", request.url));
}

export const config = {
  matcher: "/user",
};
