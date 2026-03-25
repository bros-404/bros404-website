import Link from "next/link";
import type { Locale } from "@/app/i18n.config";

export default function Footer({ dict, lang }: { dict: any; lang: Locale }) {
    return (
        <footer className="bg-white border-t border-slate-100 py-12">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-8">

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
                    <Link href={`/${lang}`} className="font-bold text-xl tracking-tighter text-slate-900 mb-2">
                        bros404<span className="text-blue-600">.</span>
                    </Link>
                    <p className="text-slate-500 text-sm mb-3">
                        &copy; {new Date().getFullYear()} {dict.footer.copyright}
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">
                        {dict.footer.operator}
                    </p>
                </div>

                <nav className="flex flex-wrap items-center justify-center gap-3">
                    <Link href={`/${lang}/beuti`} className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">
                        {dict.footer.links.product}
                    </Link>
                    <Link href={`/${lang}/privacy`} className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">
                        {dict.footer.links.privacy}
                    </Link>
                    <Link href={`/${lang}/terms`} className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">
                        {dict.footer.links.terms}
                    </Link>
                    <Link href={`/${lang}/contact`} className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">
                        {dict.footer.links.contact}
                    </Link>
                </nav>

            </div>
        </footer>
    );
}
