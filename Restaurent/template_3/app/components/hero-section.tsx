"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";

const heroTitle = "Verdelune";

export function HeroSection() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const letters = useMemo(() => heroTitle.split(""), []);

  useEffect(() => {
    if (!imageRef.current) return;

    const tween = gsap.to(imageRef.current, {
      scale: 1.16,
      duration: 24,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2200&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f2f23]/35 via-[#163227]/20 to-[#10271f]/55" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-[#f7f4ec]">
        <p className="mb-4 text-xs tracking-[0.48em] uppercase">Botanical Restaurant & Tea House</p>
        <h1 className="flex flex-wrap justify-center text-6xl font-semibold md:text-8xl">
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
              className={letter === " " ? "mx-2" : ""}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-7 max-w-2xl text-sm leading-relaxed tracking-wide md:text-base"
        >
          A sanctuary of floral tasting menus, heritage teas, and luminous evenings among misted terraces.
        </motion.p>
      </div>
    </section>
  );
}
