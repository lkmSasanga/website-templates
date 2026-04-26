"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ExperienceSection } from "./experience-section";
import { HeroSection } from "./hero-section";
import { InteractiveMenuSection } from "./interactive-menu-section";
import { Preloader } from "./preloader";
import { ReservationFooter } from "./reservation-footer";

export function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {isLoading ? <Preloader isVisible={isLoading} /> : null}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 1.02 : 1 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
      >
        <HeroSection />
        <ExperienceSection />
        <InteractiveMenuSection />
        <ReservationFooter />
      </motion.div>
    </main>
  );
}
