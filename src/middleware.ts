import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { EndpointsEnum, LinksEnum } from "./types";
import { SessionData, sessionOptions } from "./services";

export default async function middleware(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  console.log(session);
  const isAuthenticated = false;
  const currentPath = request.nextUrl.pathname;
  console.log(isAuthenticated);
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

  const response = NextResponse.next();

  return response;
}

// export const config = {
//   matcher: [
//     "/((?!sponsors|friends|news|_next/static|_next/image|.webp|favicon.ico|.*\\.webp$|$).*)",
//   ],
// };
