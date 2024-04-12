import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { EndpointsEnum, LinksEnum } from "./types";
import { authenticate } from "./auth";

export default async function middleware(request: NextRequest) {
  const isToken = request.cookies.has("token");
  const token = request.cookies.get("token");

  const userData = token && (await authenticate(token.name, token.value));

  const id = ((userData && userData?._id) || "").toString();

  const isAuthenticated = isToken && userData;
  const currentPath = request.nextUrl.pathname;

  console.log("🚀 ~ middleware ~ currentPath:", currentPath);

  if (currentPath.startsWith(EndpointsEnum.ADD_PET) && !isAuthenticated)
    return NextResponse.rewrite(new URL(LinksEnum.HOME, request.url));

  if (
    (currentPath.startsWith(LinksEnum.NOTICES_FAVORITE) ||
      currentPath.startsWith(LinksEnum.NOTICES_OWN)) &&
    !isAuthenticated
  )
    return NextResponse.redirect(new URL(LinksEnum.NOTICES_SELL, request.url));

  if (currentPath.startsWith(LinksEnum.USER) && !isAuthenticated)
    return NextResponse.redirect(new URL(LinksEnum.LOGIN, request.url));

  if (
    (currentPath.startsWith(LinksEnum.LOGIN) ||
      currentPath.startsWith(LinksEnum.REGISTER)) &&
    isAuthenticated
  )
    return NextResponse.redirect(new URL(LinksEnum.USER, request.url));

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("userId", id);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!sponsors|friends|news|_next/static|_next/image|.webp|favicon.ico|.*\\.webp$|$).*)",
  ],
};
