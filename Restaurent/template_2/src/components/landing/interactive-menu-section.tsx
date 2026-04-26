"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

type Dish = {
  name: string;
  subtitle: string;
  image: string;
};

const dishes: Dish[] = [
  {
    name: "Wagyu A5 Striploin",
    subtitle: "smoked bone marrow jus, ember shallot",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Truffle Caviar Pasta",
    subtitle: "house-made tagliolini, winter truffle cream",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Miso Black Cod",
    subtitle: "charred leek, yuzu beurre blanc",
    image:
      "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lobster Saffron Risotto",
    subtitle: "aged parmesan foam, lemon verbena oil",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "70% Cacao Souffle",
    subtitle: "Madagascar vanilla, gold leaf tuile",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
  },
];

export function InteractiveMenuSection() {
  const [activeDish, setActiveDish] = useState<Dish | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 180, damping: 24, mass: 0.45 });
  const smoothY = useSpring(mouseY, { stiffness: 180, damping: 24, mass: 0.45 });

  const activeImage = useMemo(() => activeDish?.image ?? "", [activeDish]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    mouseX.set(event.clientX + 30);
    mouseY.set(event.clientY - 180);
  };

  return (
    <section
      className="relative border-t border-white/10 bg-[#090909] px-6 py-24 md:px-12 lg:px-20"
      onPointerMove={handlePointerMove}
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-accent-soft">Signature Menu</p>
        <h2 className="mb-12 max-w-3xl text-4xl leading-tight md:text-5xl lg:text-6xl">
          A Precision-Crafted Tasting Journey
        </h2>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {dishes.map((dish) => (
            <button
              key={dish.name}
              type="button"
              onMouseEnter={() => setActiveDish(dish)}
              onFocus={() => setActiveDish(dish)}
              onMouseLeave={() => setActiveDish(null)}
              onBlur={() => setActiveDish(null)}
              className="group flex w-full items-center justify-between gap-5 py-7 text-left md:py-9"
            >
              <span className="font-serif text-2xl leading-tight text-foreground transition-colors duration-300 group-hover:text-accent-soft md:text-4xl">
                {dish.name}
              </span>
              <span className="hidden text-right text-xs uppercase tracking-[0.24em] text-muted md:block">
                {dish.subtitle}
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeDish ? (
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: smoothX, y: smoothY }}
            className="pointer-events-none fixed left-0 top-0 z-40 hidden h-56 w-80 overflow-hidden rounded-sm border border-white/20 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.45)] md:block"
          >
            <Image
              src={activeDish.image}
              alt={activeDish.name}
              fill
              sizes="320px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
