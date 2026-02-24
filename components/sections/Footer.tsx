import Link from "next/link";
import { Github, Twitter, Instagram } from "lucide-react";

export default function Footer({ dict }: { dict: any }) {
    return (
        <footer className="bg-white border-t border-slate-100 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex flex-col items-center md:items-start">
                    <Link href="/" className="font-bold text-xl tracking-tighter text-slate-900 mb-2">
                        bros404<span className="text-blue-600">.</span>
                    </Link>
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} {dict.footer.copyright}
                    </p>
                </div>

                <div className="flex items-center gap-2 group cursor-default">
                    <span className="text-sm font-mono text-slate-400 group-hover:text-red-500 transition-colors">
                        {dict.footer.social}
                    </span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
                        {dict.footer.not_found}
                    </span>
                </div>

            </div>
        </footer>
    );
}
