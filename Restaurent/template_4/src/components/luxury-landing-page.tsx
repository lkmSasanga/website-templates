"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Flame, Menu, Waves } from "lucide-react";
import { CustomCursor } from "./custom-cursor";
import { MagneticButton } from "./magnetic-button";

type AtmosphereImage = {
  src: string;
  alt: string;
};

const menuItems = [
  "EMBERDUST OYSTER",
  "SMOKED CORAL CRUDO",
  "TIDEWATER BISQUE",
  "FIRE-ROASTED LOBSTER",
  "CHARRED CITRUS SORBET",
  "SEA SALT CARAMEL OPERA",
];

const atmosphereImages: AtmosphereImage[] = [
  {
    src: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1600&q=80",
    alt: "Plated seafood tasting on stone ceramics",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
    alt: "Luxury oceanfront dining table at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
    alt: "Fire-roasted dish with dramatic plating",
  },
];

const marqueeText = "MICHELIN STAR • OCEANFRONT • FIRE-ROASTED • ";

export function LuxuryLandingPage() {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const overlayRefs = useRef<Array<HTMLDivElement | null>>([]);

  const repeatedMarquee = useMemo(() => Array.from({ length: 8 }, () => marqueeText), []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        const overlay = overlayRefs.current[index];
        if (!card || !overlay) return;

        gsap.fromTo(
          card,
          { scale: 1.2 },
          {
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 35%",
              scrub: true,
            },
          },
        );

        gsap.to(overlay, {
          xPercent: 101,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 52%",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      <CustomCursor />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/50 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-6 md:px-14">
          <a
            href="#top"
            className="cinematic-title text-xs font-bold tracking-[0.4em] text-white"
          >
            EMBER COAST
          </a>
          <div className="hidden items-center gap-10 text-xs font-semibold uppercase tracking-[0.24em] md:flex">
            <a href="#atmosphere" className="transition-colors duration-300 hover:text-[#c76a2a]">
              Atmosphere
            </a>
            <a href="#tasting" className="transition-colors duration-300 hover:text-[#c76a2a]">
              Tasting
            </a>
            <a href="#reserve" className="transition-colors duration-300 hover:text-[#c76a2a]">
              Reserve
            </a>
          </div>
          <button
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] md:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-4 w-4" />
            Menu
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-14 pt-28 md:px-14 md:pb-20">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=80"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-calm-ocean-waves-at-sunset-1579/1080p.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 grid w-full gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div className="space-y-8">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-white/75">
                COASTAL TASTING THEATER
              </p>
              <div className="hero-mask">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                  className="cinematic-title max-w-5xl text-5xl leading-[0.9] md:text-7xl xl:text-8xl"
                >
                  Where Fire Meets
                  <span className="block text-accent">The Atlantic</span>
                </motion.h1>
              </div>
              <motion.p
                initial={{ y: 36, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
              >
                Multi-sensory dining sculpted by ocean wind, live flame, and meticulously
                composed tasting courses that transform every evening into a cinematic ritual.
              </motion.p>
            </div>

            <motion.a
              href="#reserve"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#c76a2a] px-8 text-xs font-semibold uppercase tracking-[0.26em] text-white transition-all duration-300 hover:bg-[#c76a2a] hover:text-black"
            >
              Reserve Experience
            </motion.a>
          </div>
        </section>

        <section id="atmosphere" className="px-6 py-24 md:px-14 md:py-36">
          <div className="overflow-hidden border-y border-white/10 py-6">
            <motion.div
              className="flex w-max whitespace-nowrap cinematic-title text-2xl md:text-4xl"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {repeatedMarquee.map((item, index) => (
                <span key={`${item}-${index}`} className="mr-6 text-white/85">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {atmosphereImages.map((image, index) => (
              <div
                key={image.alt}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className="group relative h-[420px] overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="h-full w-full scale-[1.2] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  ref={(element) => {
                    overlayRefs.current[index] = element;
                  }}
                  className="pointer-events-none absolute inset-0 bg-[#0a0a0a]"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="tasting" className="px-6 py-24 md:px-14 md:py-36">
          <div className="mb-14 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            <Flame className="h-4 w-4 text-[#c76a2a]" />
            <span>Tasting Sequence</span>
          </div>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.28 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="space-y-5"
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, x: -70 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
                }}
              >
                <a
                  href="#reserve"
                  className="cinematic-title flex items-end justify-between border-b border-white/15 pb-4 text-2xl leading-none transition-all duration-300 hover:translate-x-2 hover:text-[#c76a2a] md:text-4xl lg:text-5xl"
                >
                  <span>{item}</span>
                  <span className="text-sm font-semibold tracking-[0.22em] text-white/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <footer
          id="reserve"
          className="relative overflow-hidden border-t border-white/10 px-6 py-24 md:px-14 md:py-32"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(199,106,42,0.22),transparent_45%)]" />
          <div className="relative z-10 space-y-10">
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              <Waves className="h-4 w-4 text-[#c76a2a]" />
              <span>Reservations</span>
            </div>
            <h2 className="cinematic-title w-full text-[clamp(2.5rem,8.5vw,9rem)] leading-[0.88]">
              Secure Your Table
            </h2>
            <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
              <p className="max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
                Every seating is intentionally intimate. Reserve your preferred horizon view and
                allow our chefs to curate a tasting ritual around your palate.
              </p>
              <MagneticButton href="#reserve" label="Book Now" />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
