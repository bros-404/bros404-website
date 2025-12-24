import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-white">
      <Header />
      <Hero />
      <WhatWeDo />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
