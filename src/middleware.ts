import { NextRequest, NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export enum LocalesLanguage {
  EN = "en",
  AR = "ar",
}
export const DEFAULT_LOCALE = LocalesLanguage.EN;
export const LOCALES = [LocalesLanguage.EN, LocalesLanguage.AR];

function getLocale(request: Request): string {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get("accept-language");
  if (acceptLanguage) {
    headers.set("accept-language", acceptLanguage.replaceAll("_", "-"));
  }

  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  return matchLocale(languages, LOCALES, DEFAULT_LOCALE);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    const newUrl = `/${locale}${
      pathname.startsWith("/") ? "" : "/"
    }${pathname}`;
    // add handler to weird links
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
