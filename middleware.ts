import { NextResponse, type NextRequest } from 'next/server';
import { Locale, i18nConfig } from './i18n';
import { getMatchingLocale } from './lib/i18n/getMatchingLocale'; // Assuming you use browser-based locale matching

export async function middleware(request: NextRequest) {
  try {
    const localeNotFound: boolean = i18nConfig.locales.every(
      (locale: Locale) =>
        !request.nextUrl.pathname.startsWith(`/${locale}/`) &&
        request.nextUrl.pathname !== `/${locale}`
    );

    // Locale not found in request url, redirect to matched locale url.
    if (localeNotFound) {
      // Use Vercel's geo header or fallback to getMatchingLocale
      const country = request.geo?.country || 'US'; // Default to 'US' if country is not available
      let newLocale: Locale = 'en'; // Fallback default locale

      console.log("country", country)

      // Set locale based on the user's country (assuming Uzbekistan should be in 'uz')
      if (country === 'UZ') {
        newLocale = 'uz';
      } else if (country === 'RU') {
        newLocale = 'ru';
      } else {
        // Use browser-based matching if geo headers are not sufficient
        newLocale = getMatchingLocale(request); // Fallback to getMatchingLocale
      }

      // Return a redirect response to the correct locale URL.
      return NextResponse.redirect(
        new URL(`/${newLocale}${request.nextUrl.pathname}`, request.url)
      );
    }
  } catch (e) {
    // Catch any errors and continue without redirecting
    console.error("Error in middleware:", e);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    // Exclude paths like API, static files, and other non-page routes
    '/((?!api|static|.*\\..*|_next|favicon.ico).*)',
  ],
};
