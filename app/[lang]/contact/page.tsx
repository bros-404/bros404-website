import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { getDictionary } from "../../get-dictionary";
import { i18n, type Locale } from "../../i18n.config";
import { Mail, ShieldCheck, FileText } from "lucide-react";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
    params,
}: {
    params: { lang: Locale };
}): Promise<Metadata> {
    const isTr = params.lang === "tr";
    return {
        title: isTr ? "İletişim | Bros404" : "Contact | Bros404",
        description: isTr
            ? "Bros404 iletişim sayfası."
            : "Bros404 contact page.",
    };
}

export default async function ContactPage({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const dict = await getDictionary(lang);
    const isTr = lang === "tr";

    const copy = isTr
        ? {
            title: "İletişim",
            subtitle: "Ürünler, iş birlikleri, destek, gizlilik ve yasal konular için bize ulaşabilirsiniz.",
            cards: [
                {
                    icon: <Mail size={28} />,
                    title: "E-posta",
                    body: "bros@bros404.com",
                },
                {
                    icon: <ShieldCheck size={28} />,
                    title: "Beuti",
                    body: "Beuti ürün sayfasına ve ilgili bilgilere bros404.com üzerinden doğrudan ulaşabilirsiniz.",
                },
                {
                    icon: <FileText size={28} />,
                    title: "Politika Sayfaları",
                    body: "Gizlilik Politikası ve Hizmet Koşulları root domainden erişilebilir durumdadır.",
                },
            ],
        }
        : {
            title: "Contact",
            subtitle: "Reach us for products, partnerships, support, privacy, and legal matters.",
            cards: [
                {
                    icon: <Mail size={28} />,
                    title: "Email",
                    body: "bros@bros404.com",
                },
                {
                    icon: <ShieldCheck size={28} />,
                    title: "Beuti",
                    body: "You can access the Beuti product page and related information directly from bros404.com.",
                },
                {
                    icon: <FileText size={28} />,
                    title: "Policy Pages",
                    body: "Privacy Policy and Terms of Service remain accessible from the root domain.",
                },
            ],
        };

    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Header dict={dict} lang={lang} />

            <section className="pt-40 pb-20 bg-slate-50">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm mb-8 shadow-sm">
                        <Mail size={18} />
                        {isTr ? "İletişim" : "Contact"}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8">{copy.title}</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">{copy.subtitle}</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 max-w-6xl">
                    {copy.cards.map((card) => (
                        <div key={card.title} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-shadow text-center">
                            <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                {card.icon}
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h2>
                            <p className="text-slate-600 leading-relaxed">{card.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer dict={dict} lang={lang} />
        </main>
    );
}
