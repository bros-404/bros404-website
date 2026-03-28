import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let locales = ["en", "tr"];
let defaultLocale = "en";
const TRACKING_COOKIE = "B404_VISITOR_TRACKED";
const TRACKING_TTL_SECONDS = 60 * 60 * 24;

function shouldTrackVisit(request: NextRequest) {
    if (request.method !== "GET") {
        return false;
    }

    if (request.cookies.get(TRACKING_COOKIE)?.value === "1") {
        return false;
    }

    const purpose = request.headers.get("purpose");
    if (purpose === "prefetch") {
        return false;
    }

    const nextRouterPrefetch = request.headers.get("next-router-prefetch");
    if (nextRouterPrefetch) {
        return false;
    }

    const userAgent = request.headers.get("user-agent")?.toLowerCase() ?? "";
    if (
        userAgent.includes("bot") ||
        userAgent.includes("crawler") ||
        userAgent.includes("spider") ||
        userAgent.includes("preview")
    ) {
        return false;
    }

    return true;
}

function trackVisitorGeo(request: NextRequest) {
    if (!shouldTrackVisit(request)) {
        return;
    }

    const city = request.headers.get("x-vercel-ip-city") || "unknown";
    const country = request.headers.get("x-vercel-ip-country") || "unknown";
    const region = request.headers.get("x-vercel-ip-country-region") || "unknown";
    const referer = request.headers.get("referer") || "";
    const userAgent = request.headers.get("user-agent") || "";

    console.info(
        JSON.stringify({
            event: "visitor_geo",
            city,
            region,
            country,
            path: request.nextUrl.pathname,
            referer,
            userAgent,
            timestamp: new Date().toISOString(),
        })
    );
}

function attachTrackingCookie(response: NextResponse) {
    response.cookies.set(TRACKING_COOKIE, "1", {
        httpOnly: true,
        maxAge: TRACKING_TTL_SECONDS,
        path: "/",
        sameSite: "lax",
        secure: true,
    });
}

export function middleware(request: NextRequest) {
    trackVisitorGeo(request);

    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        const response = NextResponse.next();

        if (shouldTrackVisit(request)) {
            attachTrackingCookie(response);
        }

        return response;
    }

    // Let's redirect if there is no locale

    // 1. Check for previously set cookie
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    if (cookieLocale && locales.includes(cookieLocale)) {
        request.nextUrl.pathname = `/${cookieLocale}${pathname}`;
        const response = NextResponse.redirect(request.nextUrl);
        if (shouldTrackVisit(request)) {
            attachTrackingCookie(response);
        }
        return response;
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
    if (shouldTrackVisit(request)) {
        attachTrackingCookie(response);
    }
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
