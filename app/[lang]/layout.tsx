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
    metadataBase: new URL("https://bros404.com"),
    title: isTr ? "Bros404 | Ürünler ve Dijital Deneyimler" : "Bros404 | Products and Digital Experiences",
    description: isTr
      ? "Bros404 ürünlerini, Beuti ürün sayfasını ve görünür gizlilik, hizmet koşulları ve iletişim sayfalarını sunan web sitesi."
      : "Website for Bros404 products, including the Beuti product page and visible privacy, terms, and contact pages.",
    openGraph: {
      title: isTr ? "Bros404 | Ürünler ve Dijital Deneyimler" : "Bros404 | Products and Digital Experiences",
      description: isTr
        ? "Bros404 ürünlerini ve Beuti için görünür gizlilik, hizmet koşulları ve iletişim sayfalarını sunan web sitesi."
        : "Website presenting Bros404 products and visible privacy, terms, and contact pages for Beuti.",
      url: `https://bros404.com/${params.lang}`,
      siteName: "Bros404",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: isTr ? "Bros404 | Ürünler ve Dijital Deneyimler" : "Bros404 | Products and Digital Experiences",
      description: isTr
        ? "Bros404 ürünleri ve Beuti için görünür gizlilik, hizmet koşulları ve iletişim sayfaları."
        : "Bros404 products with visible privacy, terms, and contact pages for Beuti.",
    },
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
