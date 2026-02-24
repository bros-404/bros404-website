import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let locales = ["en", "tr"];
let defaultLocale = "en";

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Let's redirect if there is no locale

    // 1. Check for previously set cookie
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    if (cookieLocale && locales.includes(cookieLocale)) {
        request.nextUrl.pathname = `/${cookieLocale}${pathname}`;
        return NextResponse.redirect(request.nextUrl);
    }

    // 2. Try to get location from Vercel Edge Headers
    let detectedLocale = defaultLocale;
    const country = request.headers.get("x-vercel-ip-country");

    if (country === "TR") {
        detectedLocale = "tr";
    } else if (!country) {
        // Fallback to Accept-Language headers if geolocation is unavailable (e.g. localhost)
        const acceptLanguage = request.headers.get("accept-language");
        if (acceptLanguage && acceptLanguage.includes("tr")) {
            detectedLocale = "tr";
        }
    }

    // Redirect to the default/detected locale
    request.nextUrl.pathname = `/${detectedLocale}${pathname}`;
    const response = NextResponse.redirect(request.nextUrl);

    // Also set cookie for future visits
    response.cookies.set("NEXT_LOCALE", detectedLocale);
    return response;
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next|public|favicon.ico|api|images|.*\\..*).*)",
        // Optional: only run on root (/) URL
        // '/'
    ],
};
