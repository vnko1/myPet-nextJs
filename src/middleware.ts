import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { EndpointsEnum, LinksEnum } from "./types";
import { SessionData, sessionOptions } from "./services/session";

export default async function middleware(request: NextRequest) {
  const { isLoggedIn } = await getIronSession<SessionData>(
    cookies(),
    sessionOptions
  );

  const currentPath = request.nextUrl.pathname;

  if (currentPath.startsWith(EndpointsEnum.ADD_PET) && !isLoggedIn)
    return NextResponse.rewrite(new URL(LinksEnum.HOME, request.url));

  if (currentPath.startsWith(LinksEnum.ADD_PET) && !isLoggedIn)
    return NextResponse.rewrite(new URL(LinksEnum.LOGIN, request.url));

  if (
    (currentPath.startsWith(LinksEnum.NOTICES_FAVORITE) ||
      currentPath.startsWith(LinksEnum.NOTICES_OWN)) &&
    !isLoggedIn
  )
    return NextResponse.redirect(new URL(LinksEnum.NOTICES_SELL, request.url));

  if (currentPath.startsWith(LinksEnum.USER) && !isLoggedIn)
    return NextResponse.redirect(new URL(LinksEnum.LOGIN, request.url));

  if (
    (currentPath.startsWith(LinksEnum.LOGIN) ||
      currentPath.startsWith(LinksEnum.REGISTER)) &&
    isLoggedIn
  )
    return NextResponse.redirect(new URL(LinksEnum.USER, request.url));

  const response = NextResponse.next();

  return response;
}

export const config = {
  matcher: [
    "/((?!sponsors|friends|news|_next/static|_next/image|.webp|favicon.ico|.*\\.webp$|$).*)",
  ],
};
