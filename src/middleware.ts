import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LinksEnum } from "./types";

const isAuth = false;

export default function middleware(request: NextRequest) {
  if (!isAuth)
    return NextResponse.redirect(new URL(LinksEnum.LOGIN, request.url));

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!sponsors|friends|login|register|api|_next/static|_next/image|news|.webp|favicon.ico|.*\\.webp$|$).*)",
  ],
};
