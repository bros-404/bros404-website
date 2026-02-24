"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/app/i18n.config";
import { setCookie } from "cookies-next";

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (newLocale: Locale) => {
        // Set cookie for new locale
        setCookie("NEXT_LOCALE", newLocale, { maxAge: 60 * 60 * 24 * 365, path: "/" });

        if (!pathname) return ("/");
        const segments = pathname.split("/");

        // Replace the language segment
        segments[1] = newLocale;
        const newPathname = segments.join("/");

        router.push(newPathname);
        // Refresh to apply new translations and re-render server components
        router.refresh();
    };

    return (
        <div className="flex items-center gap-2 text-sm font-medium bg-slate-50 border border-slate-200 p-1 rounded-full">
            {i18n.locales.map((locale) => (
                <button
                    key={locale}
                    onClick={() => handleLanguageChange(locale)}
                    className={`px-3 py-1 rounded-full transition-colors ${currentLang === locale
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-slate-500 hover:text-slate-900"
                        }`}
                >
                    {locale.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
