import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { getDictionary } from "../get-dictionary";
import { Locale } from "../i18n.config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      <Header dict={dict} lang={lang} />
      <Hero dict={dict} />
      <WhatWeDo dict={dict} />
      <Work dict={dict} lang={lang} />
      <About dict={dict} />
      <Contact dict={dict} />
      <Footer dict={dict} />
    </main>
  );
}
