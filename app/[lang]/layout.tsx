import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import { i18n, type Locale } from "../i18n.config";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const isTr = params.lang === "tr";
  return {
    title: isTr ? "Bros404 | Eğlenceli ve Fonksiyonel Uygulamalar" : "Bros404 | Creating Fun & Functional Apps",
    description: isTr ? "Eğlenceli ve detaylı uygulamalar geliştiren iki arkadaş. Son projelerimize göz atın." : "Two friends building detailed and fun applications. Check out our latest work.",
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale: string) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang} className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans antialiased text-slate-800 bg-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
