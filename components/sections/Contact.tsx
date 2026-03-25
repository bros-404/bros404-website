"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowRight, FileText, ShieldCheck } from "lucide-react";

export default function Contact({ dict, lang }: { dict: any; lang: string }) {
    return (
        <section id="contact" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Info Side */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">{dict.contact.title}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {dict.contact.subtitle}
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{dict.contact.email_label}</h4>
                                    <p className="text-slate-600">bros@bros404.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100"
                    >
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{dict.contact.cta_title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {dict.contact.cta_description}
                                </p>
                            </div>

                            <a
                                href="mailto:bros@bros404.com"
                                className="w-full py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                            >
                                {dict.contact.form_submit} <ArrowRight size={18} />
                            </a>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <Link
                                    href={`/${lang}/privacy`}
                                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 hover:bg-slate-100 transition-colors"
                                >
                                    <ShieldCheck size={20} className="text-blue-600" />
                                    <span className="font-medium">{dict.contact.quick_links.privacy}</span>
                                </Link>
                                <Link
                                    href={`/${lang}/terms`}
                                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 hover:bg-slate-100 transition-colors"
                                >
                                    <FileText size={20} className="text-slate-900" />
                                    <span className="font-medium">{dict.contact.quick_links.terms}</span>
                                </Link>
                            </div>

                            <p className="text-sm text-slate-500">
                                {dict.contact.form_note}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
