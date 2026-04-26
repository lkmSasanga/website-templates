"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinnedContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const pinnedContent = pinnedContentRef.current;
    if (!section || !pinnedContent) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top+=96",
        end: "bottom bottom-=96",
        pin: pinnedContent,
        pinSpacing: false,
      });

      return () => {
        trigger.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative border-t border-white/10 bg-background-soft px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[minmax(340px,1fr)_1.2fr] lg:gap-16">
        <motion.div
          ref={pinnedContentRef}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="self-start lg:pt-8"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-accent-soft">The Experience</p>
          <h2 className="max-w-md text-4xl leading-[1.02] text-foreground md:text-5xl lg:text-6xl">
            A Culinary Symphony
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            Every course unfolds like a movement in an orchestral score, balancing texture,
            temperature, and aroma in intimate candlelit rhythm. Our chefs compose with seasonal
            precision, inviting each guest into a slow, immersive ritual of taste.
          </motion.p>
        </motion.div>

        <div className="space-y-7 md:space-y-8">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-black/40"
            >
              <div className="relative h-[54vh] w-full md:h-[62vh]">
                <Image
                  src={image}
                  alt="Luxury plated culinary presentation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
