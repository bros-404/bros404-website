"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

export default function About({ dict }: { dict: any }) {
    const team = [
        {
            name: "Ulvi Asadzade",
            role: dict.about.ulvi_role,
            bio: dict.about.ulvi_bio,
            socials: { twitter: "#", linkedin: "#", instagram: "#" },
            image: "/team/ulvi_final_v2.jpg",
            color: "bg-blue-100 text-blue-600"
        },
        {
            name: "Mert Candemir",
            role: dict.about.mert_role,
            bio: dict.about.mert_bio,
            socials: { twitter: "#", linkedin: "#", instagram: "#" },
            image: "/team/mert_final_v3.jpg",
            color: "bg-purple-100 text-purple-600"
        }
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">{dict.about.title}</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {dict.about.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-slate-50 rounded-[2rem] transform transition-transform group-hover:scale-105 duration-300 -z-10" />
                            <div className="p-8 flex flex-col items-center text-center">
                                <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-50">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                <span className="text-sm font-medium text-slate-500 mb-4">{member.role}</span>
                                <p className="text-slate-600 mb-6 px-4">
                                    "{member.bio}"
                                </p>

                                <div className="flex gap-4">
                                    <a href={member.socials.twitter} className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-500 hover:text-white transition-colors">
                                        <Twitter size={18} />
                                    </a>
                                    <a href={member.socials.linkedin} className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-700 hover:text-white transition-colors">
                                        <Linkedin size={18} />
                                    </a>
                                    <a href={member.socials.instagram} className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-pink-600 hover:text-white transition-colors">
                                        <Instagram size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
