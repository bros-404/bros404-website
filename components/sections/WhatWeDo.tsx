"use client";

import { motion } from "framer-motion";
import { Code2, Gamepad2, Rocket } from "lucide-react";

const features = [
    {
        icon: <Code2 className="w-10 h-10 text-blue-500" />,
        title: "Temiz Kod",
        description: "Sadece çalışması yetmez, şiir gibi okunmalı.",
    },
    {
        icon: <Gamepad2 className="w-10 h-10 text-purple-500" />,
        title: "Eğlenceli Deneyim",
        description: "Kullanıcıyı sıkmayan, interaktif arayüzler.",
    },
    {
        icon: <Rocket className="w-10 h-10 text-pink-500" />,
        title: "Hızlı Çözümler",
        description: "Fikirden ürüne giden en kısa ve etkili yol.",
    },
];

export default function WhatWeDo() {
    return (
        <section id="what-we-do" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">
                                Hikayemiz
                            </h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                İki Arkadaş, <br /> Sonsuz Kahve ve <br /> Bir Sürü Kod Satırı.
                            </h3>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Aslında her şey "Bir uygulama yapsak ne güzel olur" cümlesiyle başladı.
                                İki arkadaş olarak, dünyayı değiştirecek büyük fikirlerin peşinden koşarken,
                                kendimizi eğlenceli ve kullanışlı mobil uygulamalar geliştirirken bulduk.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Bros404 olarak amacımız basit: İnsanların yüzünde tebessüm oluşturan,
                                teknolojiyi karmaşık değil keyifli hale getiren işler üretmek.
                                Sıkıcı kurumsal sitelerden ve anlaşılmaz menülerden biz de sıkıldık.
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="mb-4 bg-white p-4 rounded-2xl w-fit shadow-sm">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                                    <p className="text-slate-600">{feature.description}</p>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white flex flex-col justify-center items-center text-center shadow-lg"
                            >
                                <span className="text-5xl font-bold mb-2">404</span>
                                <p className="font-medium opacity-90">Hata değil, tarzımız.</p>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
