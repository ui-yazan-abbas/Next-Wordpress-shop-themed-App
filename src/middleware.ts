import { NextRequest, NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const DEFAULT_LOCALE = "en";
const LOCALES = ["en", "ar", "se"];

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
  let locale = getLocale(request) || DEFAULT_LOCALE;
  const pathname = request.nextUrl.pathname;

  const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl);

  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.rewrite(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next|.*\\..*).*)",
  ],
};
