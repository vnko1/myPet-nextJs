import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL("/register", request.url));
}

export const config = {
  matcher: "/user",
};
