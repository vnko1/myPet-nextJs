import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ConstantsEnum, EndpointsEnum, LinksEnum } from "./types";
import { userIsAuthenticated } from "./auth";

export default async function middleware(request: NextRequest) {
  const userData = await userIsAuthenticated();

  const isAuthenticated = userData;
  const currentPath = request.nextUrl.pathname;

  const id = ((userData && userData?._id) || "").toString();

  if (currentPath.startsWith(EndpointsEnum.ADD_PET) && !isAuthenticated)
    return NextResponse.rewrite(new URL(LinksEnum.HOME, request.url));

  if (currentPath.startsWith(LinksEnum.ADD_PET) && !isAuthenticated)
    return NextResponse.rewrite(new URL(LinksEnum.LOGIN, request.url));

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

  requestHeaders.set(ConstantsEnum.USER_ID, id);

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
