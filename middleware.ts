import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

let locales = ["en", "tr"];
let defaultLocale = "en";
const TRACKING_COOKIE = "B404_VISITOR_TRACKED";
const TRACKING_TTL_SECONDS = 60 * 60 * 24;
const TRACKED_HOSTS = new Set(["bros404.com", "www.bros404.com"]);
const WEB_GEO_SOURCE = "bros404.com";
const WEB_GEO_INGEST_URL =
    process.env.WEB_GEO_INGEST_URL || "https://api.beuti.app/v1/web-geo/ingest";

let signingKeyPromise: Promise<CryptoKey> | null = null;

type WebGeoPayload = {
    eventId: string;
    source: string;
    city: string | null;
    region: string | null;
    country: string | null;
    path: string;
    referer: string | null;
    occurredAt: string;
};

function normalizeHeaderValue(value: string | null) {
    const normalized = value?.trim();
    return normalized ? normalized : null;
}

function shouldTrackHost(request: NextRequest) {
    return TRACKED_HOSTS.has(request.nextUrl.hostname.toLowerCase());
}

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

function buildWebGeoPayload(request: NextRequest): WebGeoPayload | null {
    if (!shouldTrackHost(request)) {
        return null;
    }

    const city = normalizeHeaderValue(request.headers.get("x-vercel-ip-city"));
    const country = normalizeHeaderValue(request.headers.get("x-vercel-ip-country"));
    const region = normalizeHeaderValue(request.headers.get("x-vercel-ip-country-region"));

    if (!city && !country && !region) {
        return null;
    }

    return {
        eventId: crypto.randomUUID(),
        source: WEB_GEO_SOURCE,
        city,
        region,
        country,
        path: request.nextUrl.pathname,
        referer: normalizeHeaderValue(request.headers.get("referer")),
        occurredAt: new Date().toISOString(),
    };
}

function getSigningKey(secret: string) {
    if (!signingKeyPromise) {
        signingKeyPromise = crypto.subtle.importKey(
            "raw",
            new TextEncoder().encode(secret),
            { name: "HMAC", hash: "SHA-256" },
            false,
            ["sign"]
        );
    }
    return signingKeyPromise;
}

async function signWebGeoBody(body: string, timestamp: string, secret: string) {
    const key = await getSigningKey(secret);
    const payload = new TextEncoder().encode(`${timestamp}.${body}`);
    const signature = await crypto.subtle.sign("HMAC", key, payload);
    return Array.from(new Uint8Array(signature))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
}

async function sendWebGeoPayload(payload: WebGeoPayload) {
    const secret = process.env.WEB_GEO_INGEST_SECRET;
    if (!secret) {
        return false;
    }

    const body = JSON.stringify(payload);
    const timestamp = Date.now().toString();
    const signature = await signWebGeoBody(body, timestamp, secret);

    const response = await fetch(WEB_GEO_INGEST_URL, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "x-web-geo-timestamp": timestamp,
            "x-web-geo-signature": `sha256=${signature}`,
        },
        body,
        cache: "no-store",
    });

    return response.ok;
}

function queueWebGeoTracking(request: NextRequest, event: NextFetchEvent) {
    if (!shouldTrackVisit(request)) {
        return false;
    }

    const payload = buildWebGeoPayload(request);
    if (!payload) {
        return false;
    }

    event.waitUntil(
        sendWebGeoPayload(payload).catch((error) => {
            console.warn("web-geo ingest failed", {
                message: error instanceof Error ? error.message : String(error),
            });
        })
    );

    return true;
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

export function middleware(request: NextRequest, event: NextFetchEvent) {
    const trackingQueued = queueWebGeoTracking(request, event);

    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        const response = NextResponse.next();

        if (trackingQueued) {
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
        if (trackingQueued) {
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
    if (trackingQueued) {
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
