import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n.config";
import { Sparkles, Wand2, Palette, Users, Smartphone, Calendar, Search, MessageCircle, UserCircle, LayoutGrid, Star } from "lucide-react";

export default async function NailiyPage({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const dict = await getDictionary(lang);
    const np = dict.nailiyPage;

    return (
        <main className="min-h-screen bg-slate-50 flex flex-col">
            <Header dict={dict} lang={lang} />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden flex-1">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full flex justify-center -z-10 opacity-30">
                    <div className="w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="container mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-pink-100 text-pink-600 font-semibold text-sm mb-8 shadow-sm">
                        <Sparkles size={18} />
                        {np.subtitle}
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter">
                        {np.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
                        {np.description}
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{np.features_title}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-center hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                                <Wand2 size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{np.feature_1_title}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">{np.feature_1_desc}</p>
                        </div>

                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-center hover:shadow-xl transition-all hover:-translate-y-2 duration-300 delay-100">
                            <div className="w-20 h-20 bg-pink-100 text-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                                <Palette size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{np.feature_2_title}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">{np.feature_2_desc}</p>
                        </div>

                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-center hover:shadow-xl transition-all hover:-translate-y-2 duration-300 delay-200">
                            <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                                <Users size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{np.feature_3_title}</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">{np.feature_3_desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 bg-slate-100 relative overflow-hidden">
                {/* Decorative background blobs */}
                <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-20 -right-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{np.gallery_title}</h2>
                    </div>

                    {/* Scrollable container for images */}
                    <div className="flex gap-8 overflow-x-auto pb-10 snap-x snap-mandatory px-4 flex-nowrap md:px-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10">
                        {[
                            "entry page.png",
                            "discover page.png",
                            "select nail shape.png",
                            "select color.png",
                            "result.png",
                            "gallery.png"
                        ].map((imgName, idx) => (
                            <div
                                key={idx}
                                className="shrink-0 snap-center relative w-[280px] md:w-[320px] rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform duration-500 ease-out hover:-translate-y-4 flex flex-col"
                            >
                                <img
                                    src={`/ingilizce tasarım/${imgName}`}
                                    alt={imgName.replace('.png', '')}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Features Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm mb-6">
                            <Sparkles size={16} />
                            {np.upcoming_title}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{np.upcoming_subtitle}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="p-8 rounded-[2rem] bg-indigo-50 border border-indigo-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                                <Calendar size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{np.upcoming_1_title}</h3>
                            <p className="text-slate-600">{np.upcoming_1_desc}</p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-pink-50 border border-pink-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6">
                                <Search size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{np.upcoming_2_title}</h3>
                            <p className="text-slate-600">{np.upcoming_2_desc}</p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-green-50 border border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                                <MessageCircle size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{np.upcoming_3_title}</h3>
                            <p className="text-slate-600">{np.upcoming_3_desc}</p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-purple-50 border border-purple-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                <UserCircle size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{np.upcoming_4_title}</h3>
                            <p className="text-slate-600">{np.upcoming_4_desc}</p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-orange-50 border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                                <LayoutGrid size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{np.upcoming_5_title}</h3>
                            <p className="text-slate-600">{np.upcoming_5_desc}</p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-amber-50 border border-amber-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                                <Star size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{np.upcoming_6_title}</h3>
                            <p className="text-slate-600">{np.upcoming_6_desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-slate-900 text-white text-center relative overflow-hidden mt-auto">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-5xl md:text-6xl font-black mb-6">{np.download_title}</h2>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 font-light">
                        {np.download_subtitle}
                    </p>
                    <a
                        href="https://apps.apple.com/tr/app/nailiy-t%C4%B1rnak-tasar%C4%B1m%C4%B1/id6752858028?l=tr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 active:scale-95 transition-transform shadow-2xl hover:shadow-white/20"
                    >
                        <Smartphone size={28} />
                        App Store
                    </a>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            </section>

            <Footer dict={dict} />
        </main>
    );
}
