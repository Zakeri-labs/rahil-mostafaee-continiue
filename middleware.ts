import { NextResponse, type NextRequest } from "next/server";

/**
 * Canonical page URLs end with a slash (/en/services/). Next's built-in redirect is off
 * (skipTrailingSlashRedirect) because it would also redirect /api calls such as the Stripe
 * webhook, and the WordPress blog (/blog) keeps its own non-slash URLs.
 *
 * request.nextUrl hides the trailing slash, so the raw request URL is inspected instead.
 */
export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  if (url.pathname.endsWith("/")) return NextResponse.next();

  url.pathname = `${url.pathname}/`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Skip /api, /blog, Next internals and anything that looks like a file (has an extension).
  matcher: ["/((?!api(?:/|$)|blog(?:/|$)|_next/|.*\\..*).+)"],
};
