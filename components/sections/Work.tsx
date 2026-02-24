"use client";

import { motion } from "framer-motion";
import { Download, QrCode, Star, Smartphone, Sparkles } from "lucide-react";

export default function Work({ dict, lang }: { dict: any, lang: string }) {
    return (
        <section id="work" className="py-24 bg-slate-50 overflow-hidden relative">
            {/* Background blobs */}
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-pink-100/40 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{dict.work.title}</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        {dict.work.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100 relative overflow-hidden"
                >
                    {/* Card Decoration */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-pink-50 via-purple-50 to-white -z-10 rounded-[3rem]" />

                    <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left space-y-8 z-10">
                            <div className="space-y-4">
                                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    <span className="text-slate-500 font-medium ml-2 text-sm">{dict.work.rating_text}</span>
                                </div>

                                <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                                    {dict.work.app_title}
                                </h3>
                                <h4 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                                    {dict.work.app_subtitle}
                                </h4>
                            </div>

                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                                <strong className="font-semibold text-slate-900">{dict.work.strong_desc}</strong> <br />
                                {dict.work.app_desc.replace(dict.work.strong_desc, '')}
                            </p>

                            <div className="flex flex-col items-center lg:items-start gap-8 mt-4">
                                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                    {dict.work.tags.map((tag: string) => (
                                        <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="w-full h-px bg-slate-200/60" />

                                <div className="flex flex-col sm:flex-row items-center gap-4 w-full flex-wrap justify-center lg:justify-start">
                                    {/* App Store Button - Larger and more prominent */}
                                    <a
                                        href="https://apps.apple.com/tr/app/nailiy-t%C4%B1rnak-tasar%C4%B1m%C4%B1/id6752858028?l=tr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative overflow-hidden flex items-center justify-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-slate-900/40 w-full sm:w-auto"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 z-0" />
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-blue-500 to-purple-500 transition-opacity duration-500 z-0" />

                                        <Download size={28} className="z-10 group-hover:-translate-y-1 transition-transform" />
                                        <div className="text-left z-10">
                                            <div className="text-xs opacity-80 font-medium">{dict.work.download_btn_sub}</div>
                                            <div className="text-xl font-bold leading-none tracking-wide">App Store</div>
                                        </div>
                                    </a>

                                    {/* Details Button */}
                                    <a
                                        href={`/${lang}/nailiy`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative overflow-hidden flex items-center justify-center bg-white border border-slate-200 text-slate-900 px-8 py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md hover:border-slate-300 w-full sm:w-auto"
                                    >
                                        <span className="text-lg font-bold">{dict.work.details_btn}</span>
                                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </a>

                                    {/* QR Code - Enlarged */}
                                    <div className="flex items-center justify-center gap-5 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="bg-slate-900 p-1 rounded-xl">
                                            <div className="bg-white p-2 rounded-lg">
                                                <QrCode size={56} className="text-slate-900" />
                                            </div>
                                        </div>
                                        <div className="text-left pr-2">
                                            <span className="block text-sm font-bold text-slate-900">{dict.work.qr_title}</span>
                                            <span className="text-xs text-slate-500">{dict.work.qr_sub}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image (Mockup) */}
                        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
                            {/* Decorative Circles behind phone */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-60 -z-10 animate-pulse" />

                            <div className="relative w-[320px] shadow-2xl z-10 transition-transform hover:-translate-y-2 duration-500 rounded-[3rem]">
                                {/* Screen Content */}
                                <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center rounded-[3.5rem]">
                                    <img
                                        src="/ingilizce tasarım/entry page.png"
                                        alt="Nailiy App Home Screen"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
