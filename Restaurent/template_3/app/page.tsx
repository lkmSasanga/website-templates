import { FloatingNav } from "./components/floating-nav";
import { HeroSection } from "./components/hero-section";
import { MenuAccordion } from "./components/menu-accordion";
import { ReserveSection } from "./components/reserve-section";
import { StickyFooter } from "./components/sticky-footer";
import { StorySection } from "./components/story-section";

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-[#f8f5ec]">
      <FloatingNav />

      <div className="relative z-10 mb-[46vh] bg-[#f8f5ec] md:mb-[50vh]">
        <HeroSection />
        <StorySection />
        <MenuAccordion />
        <ReserveSection />
      </div>

      <StickyFooter />
      <main className="sr-only">
        <h1>Verdelune Botanical Restaurant and Tea House</h1>
      </main>
    </div>
  );
}
