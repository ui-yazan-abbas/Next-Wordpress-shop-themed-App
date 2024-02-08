import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import { DEFAULT_LOCALE, LOCALES } from "./constants";

// Gets preferrd language from users request headers
function getLocale(request: Request): string {
  // Gets preferrd language from users request headers
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get("accept-language");
  if (acceptLanguage) {
    headers.set("accept-language", acceptLanguage.replaceAll("_", "-"));
  }

  /* 
  Creates headers object ---> pass it to negotioter(light weight http
  library) to return an array of the preferred languages of our user
  then we try to match the requested locale with our locales
   */
  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  return matchLocale(languages, LOCALES, DEFAULT_LOCALE);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    // create a new url with the path and locale
    const newUrl = `/${locale}${
      pathname.startsWith("/") ? "" : "/"
    }${pathname}`;
    if (locale === DEFAULT_LOCALE) {
      return NextResponse.rewrite(new URL(newUrl, request.url));
    }

    return NextResponse.redirect(new URL(newUrl, request.url));
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
