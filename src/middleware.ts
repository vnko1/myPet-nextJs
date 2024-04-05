import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LinksEnum } from "./types";
import { authenticate } from "./auth";

export default async function middleware(request: NextRequest) {
  const isToken = request.cookies.has("token");
  const token = request.cookies.get("token");
  const isVerified = token && (await authenticate(token.name, token.value));
  const isAuth = isToken && isVerified;
  const currentPath = request.nextUrl.pathname;

  if (currentPath.startsWith(LinksEnum.USER) && !isAuth)
    return NextResponse.redirect(new URL(LinksEnum.LOGIN, request.url));

  if (currentPath.startsWith(LinksEnum.LOGIN) && isAuth)
    return NextResponse.redirect(new URL(LinksEnum.USER, request.url));

  if (currentPath.startsWith(LinksEnum.REGISTER) && isAuth)
    return NextResponse.redirect(new URL(LinksEnum.USER, request.url));

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!sponsors|friends|api|_next/static|_next/image|news|.webp|favicon.ico|.*\\.webp$|$).*)",
  ],
};
