import { NextResponse, type NextRequest } from "next/server";
// import { createClient } from "@/utils/supabase/middleware";
import { Locale, i18nConfig } from './i18n';
import { getMatchingLocale } from './lib/i18n/getMatchingLocale';

export async function middleware(request: NextRequest) {
  try {
    const localeNotFound: boolean = i18nConfig.locales.every(
      (locale: Locale) =>
        !request.nextUrl.pathname.startsWith(`/${locale}/`) &&
        request.nextUrl.pathname !== `/${locale}`
    );
  
    // Locale not found in request url, redirect to matched locale url.
    if (localeNotFound) {
      // Get matching locale for user.
      const newLocale: Locale = getMatchingLocale(request);
  
      // Return new url redirect and redirect user to correct locale url.
      return NextResponse.redirect(
        new URL(`/${newLocale}/${request.nextUrl.pathname}`, request.url)
      );
    }
  } catch (e) {
    // If you are here, a Supabase client could not be created!
    // This is likely because you have not set up environment variables.
    // Check out http://localhost:3000 for Next Steps.
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
}

export const config = {
  matcher: [
    // '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
    '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'
  ],
};
