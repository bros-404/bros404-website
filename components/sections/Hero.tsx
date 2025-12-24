"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">

            {/* Background Gradients - Removed or kept very subtle if requested, but user said 'old state' so making it white/clean */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Original simple dynamic background or just white. Going for clean white based on request "eski hali" */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50/30 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-50/30 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6"
                    >
                        <span className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-blue-600 text-sm font-semibold tracking-wide">
                            Yeni Nesil Uygulama Stüdyosu
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8"
                    >
                        Fikirleri <span className="text-blue-600">Koda</span>, <br className="hidden md:block" />
                        Kodları <span className="text-purple-600">Eğlenceye</span> Dönüştürüyoruz.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto"
                    >
                        Biz Bros404. İki arkadaşın dünyayı kurtarma (veya en azından biraz daha eğlenceli hale getirme) girişimi.
                        Modern, hızlı ve kullanıcı dostu uygulamalar tasarlıyoruz.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#work"
                            className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-slate-900/20 active:scale-95 w-full sm:w-auto"
                        >
                            İşlerimize Göz At &rarr;
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-colors shadow-sm active:scale-95 w-full sm:w-auto"
                        >
                            İletişime Geç
                        </a>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-xs tracking-widest uppercase"
            >
                <span>Aşağı Kaydır</span>
                <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent"></div>
            </motion.div>
        </section>
    );
}
