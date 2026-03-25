import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { getDictionary } from "../../get-dictionary";
import { i18n, type Locale } from "../../i18n.config";
import { FileText, ShieldCheck, Mail } from "lucide-react";

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
        title: isTr ? "Hizmet Koşulları | Beuti" : "Terms of Service | Beuti",
        description: isTr
            ? "Beuti ve Bros404 için public hizmet koşulları sayfası."
            : "Public Terms of Service page for Beuti and Bros404.",
    };
}

export default async function TermsPage({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const dict = await getDictionary(lang);
    const isTr = lang === "tr";

    const copy = isTr
        ? {
            title: "Hizmet Koşulları",
            subtitle: "Bu sayfa, Bros404 tarafından işletilen Beuti ürünü için temel kullanım koşullarını özetler.",
            cards: [
                {
                    icon: <FileText size={28} />,
                    title: "Hizmet Kimliği",
                    body: "Bros404, Beuti ürününü ve public website yüzeyini işletir. Beuti, salon ve müşteri deneyimi platformu olarak sunulur.",
                },
                {
                    icon: <ShieldCheck size={28} />,
                    title: "Kabul Edilebilir Kullanım",
                    body: "Website ve public sayfalar yalnızca yasal ve meşru amaçlarla kullanılmalıdır. Yetkisiz erişim, kötüye kullanım veya müdahale kabul edilmez.",
                },
                {
                    icon: <Mail size={28} />,
                    title: "İşlem Amaçlı E-posta",
                    body: "auth.beuti.app yalnızca hesap doğrulama, şifre sıfırlama, tek kullanımlık kodlar ve güvenlik bildirimleri için kullanılır. Marketing veya bulk mail bu domain üzerinden gönderilmez.",
                },
            ],
        }
        : {
            title: "Terms of Service",
            subtitle: "This page summarizes the basic operating terms for Beuti and Bros404.",
            cards: [
                {
                    icon: <FileText size={28} />,
                    title: "Service Identity",
                    body: "Bros404 operates the Beuti product and the related public pages. Beuti is presented as a salon and customer experience platform.",
                },
                {
                    icon: <ShieldCheck size={28} />,
                    title: "Acceptable Use",
                    body: "The website and public pages must be used only for lawful and legitimate purposes. Unauthorized access, abuse, or interference is not permitted.",
                },
                {
                    icon: <Mail size={28} />,
                    title: "Transactional Email Only",
                    body: "auth.beuti.app is used only for account verification, password reset, one-time codes, and security notifications. No marketing or bulk mail is sent from this domain.",
                },
            ],
        };

    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Header dict={dict} lang={lang} />

            <section className="pt-40 pb-20 bg-slate-50">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm mb-8 shadow-sm">
                        <FileText size={18} />
                        {isTr ? "Hizmet Koşulları" : "Terms of Service"}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8">{copy.title}</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">{copy.subtitle}</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 max-w-6xl">
                    {copy.cards.map((card) => (
                        <div key={card.title} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6">
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
