import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackgroundGrid } from "@/components/layout/BackgroundGrid";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { PainPoints } from "@/components/sections/PainPoints";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <BackgroundGrid />

      <main className="relative z-10 pt-20 lg:pt-24 flex flex-col min-h-screen">
        <Hero />
        <LogoMarquee />

        {/* Main Content Container */}
        <div className="bg-white rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.03)] relative z-20 pb-20">
          <PainPoints />
          <ServicesBento />
          <CaseStudy />
          <CTASection />
          <Footer />
        </div>
      </main>
    </>
  );
}
