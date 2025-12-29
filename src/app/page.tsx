import { HeroInstitucional } from "@/components/home/HeroInstitucional";
import { SociedadeSection } from "@/components/home/SociedadeSection";
import { AreasGrid } from "@/components/home/AreasGrid";
import { ServicosSection } from "@/components/home/ServicosSection";
import { BapconSection } from "@/components/home/BapconSection";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroInstitucional />
      <SociedadeSection />
      <AreasGrid />
      <ServicosSection />
      <BapconSection />
      <CTASection />
      <Footer />
    </main>
  );
}
