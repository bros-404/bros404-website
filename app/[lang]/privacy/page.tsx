import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { getDictionary } from "../../get-dictionary";
import { i18n, type Locale } from "../../i18n.config";
import { ShieldCheck, FileText, Mail } from "lucide-react";

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
        title: isTr ? "Gizlilik Politikası | Beuti" : "Privacy Policy | Beuti",
        description: isTr
            ? "Beuti ve Bros404 için public gizlilik politikası sayfası."
            : "Public Privacy Policy page for Beuti and Bros404.",
    };
}

export default async function PrivacyPage({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const dict = await getDictionary(lang);
    const isTr = lang === "tr";

    const copy = isTr
        ? {
            title: "Gizlilik Politikası",
            subtitle: "Bu sayfa, Beuti ve Bros404 ile ilgili gizlilik yaklaşımını özetler.",
            sections: [
                {
                    icon: <FileText size={28} />,
                    title: "Operatör",
                    body: "Beuti, Bros404 tarafından işletilen bir salon ve müşteri deneyimi platformudur.",
                },
                {
                    icon: <ShieldCheck size={28} />,
                    title: "Veri Kullanımı",
                    body: "İletişim, hesap, operasyon ve güvenlik talepleri; hizmeti çalıştırmak, kullanıcı erişimini korumak ve support süreçlerini yürütmek için işlenebilir.",
                },
                {
                    icon: <Mail size={28} />,
                    title: "Auth Domain",
                    body: "Authentication e-postaları auth.beuti.app üzerinden hesap doğrulama, şifre sıfırlama, tek kullanımlık kodlar ve güvenlik bildirimleri için gönderilir. Bu auth domain marketing veya bulk mail için kullanılmaz.",
                },
            ],
            bulletsTitle: "Genel İlkeler",
            bullets: [
                "Bros404 yalnızca hizmeti işletmek, kullanıcı güvenliğini sağlamak ve destek süreçlerini yürütmek için gerekli veriyi kullanmayı hedefler.",
                "Privacy, Terms ve Contact sayfaları root domainden görünür tutulur.",
                "Gizlilik veya veri talepleri için bros@bros404.com adresi kullanılır.",
            ],
        }
        : {
            title: "Privacy Policy",
            subtitle: "This page summarizes the privacy approach for Beuti and Bros404.",
            sections: [
                {
                    icon: <FileText size={28} />,
                    title: "Operator",
                    body: "Beuti is a salon and customer experience platform operated by Bros404.",
                },
                {
                    icon: <ShieldCheck size={28} />,
                    title: "Data Use",
                    body: "Contact, account, operational, and security-related information may be processed to run the service, protect account access, and handle support flows.",
                },
                {
                    icon: <Mail size={28} />,
                    title: "Auth Domain",
                    body: "Authentication emails are sent from auth.beuti.app for account verification, password reset, one-time codes, and security notifications. This auth domain is not used for marketing or bulk mail.",
                },
            ],
            bulletsTitle: "General Approach",
            bullets: [
                "Bros404 aims to use only the information needed to operate the service, protect users, and respond to support requests.",
                "Privacy, Terms, and Contact remain visible from the root domain.",
                "Privacy or data-related questions can be sent to bros@bros404.com.",
            ],
        };

    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Header dict={dict} lang={lang} />

            <section className="pt-40 pb-20 bg-slate-50">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm mb-8 shadow-sm">
                        <ShieldCheck size={18} />
                        {isTr ? "Gizlilik Politikası" : "Privacy Policy"}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8">{copy.title}</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">{copy.subtitle}</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 max-w-6xl">
                    {copy.sections.map((section) => (
                        <div key={section.title} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6">
                                {section.icon}
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                            <p className="text-slate-600 leading-relaxed">{section.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 bg-slate-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">{copy.bulletsTitle}</h2>
                        <ul className="space-y-4 text-slate-600 text-lg leading-relaxed">
                            {copy.bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-3">
                                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500 shrink-0"></span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <Footer dict={dict} lang={lang} />
        </main>
    );
}
