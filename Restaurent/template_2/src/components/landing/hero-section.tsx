"use client";

import { ArrowDownRight } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const heroImage =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80";

const words = ["An", "Evening", "To", "Remember"];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 20, mass: 0.3 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 20, mass: 0.3 });

  const transform = useMotionTemplate`translate3d(${smoothX}px, ${smoothY}px, 0) scale(1.08)`;

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;

    const { width, height, left, top } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    pointerX.set(((x / width) - 0.5) * -26);
    pointerY.set(((y / height) - 0.5) * -26);
  };

  return (
    <section
      className="relative flex min-h-screen items-end overflow-hidden px-6 pb-14 md:px-12 md:pb-16 lg:px-20"
      onPointerMove={onPointerMove}
    >
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            transform: prefersReducedMotion ? "scale(1.05)" : transform,
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/50 to-black/90" />
        <div className="film-grain" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-5 text-xs uppercase tracking-[0.45em] text-accent-soft"
          >
            Michelin Inspired Culinary Theater
          </motion.p>

          <h1 className="text-5xl uppercase leading-[0.95] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            {words.map((word, index) => (
              <span key={word} className="mr-[0.22em] inline-block overflow-hidden">
                <motion.span
                  initial={{ y: "120%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.55 + index * 0.14,
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="max-w-md border-l border-white/20 pl-6 text-sm text-foreground/85"
        >
          <p className="leading-relaxed">
            Enter an intimate world of candlelit ambiance, seasonal tasting menus, and artful
            pairings designed to transform dinner into memory.
          </p>
          <a
            href="#booking"
            className="mt-6 inline-flex items-center gap-2 uppercase tracking-[0.2em] text-accent-soft transition-transform duration-300 hover:translate-x-1"
          >
            Reserve Your Table <ArrowDownRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
