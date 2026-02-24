"use client";

import { motion } from "framer-motion";
import { Code2, Gamepad2, Rocket } from "lucide-react";

export default function WhatWeDo({ dict }: { dict: any }) {
    const features = [
        {
            icon: <Code2 className="w-10 h-10 text-blue-500" />,
            title: dict.whatWeDo.feature_1_title,
            description: dict.whatWeDo.feature_1_desc,
        },
        {
            icon: <Gamepad2 className="w-10 h-10 text-purple-500" />,
            title: dict.whatWeDo.feature_2_title,
            description: dict.whatWeDo.feature_2_desc,
        },
        {
            icon: <Rocket className="w-10 h-10 text-pink-500" />,
            title: dict.whatWeDo.feature_3_title,
            description: dict.whatWeDo.feature_3_desc,
        },
    ];

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
                                {dict.whatWeDo.subtitle}
                            </h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                {dict.whatWeDo.title_1} <br /> {dict.whatWeDo.title_2} <br /> {dict.whatWeDo.title_3}
                            </h3>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                {dict.whatWeDo.desc_1}
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                {dict.whatWeDo.desc_2}
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
                                <p className="font-medium opacity-90">{dict.whatWeDo["404_text"]}</p>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
