"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type MenuItem = {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
};

const dishes: MenuItem[] = [
  {
    id: "iris-risotto",
    title: "Iris Petal Risotto",
    price: "$34",
    description:
      "Creamy carnaroli rice layered with blue iris essence, lemon thyme, and whipped mascarpone foam.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "rose-char",
    title: "Rosewood Charred Salmon",
    price: "$42",
    description:
      "Line-caught salmon finished over rosewood embers, served with tea-smoked fennel and herb oil.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "jasmine-soba",
    title: "Jasmine Garden Soba",
    price: "$29",
    description:
      "Hand-cut soba, jasmine dashi, young greens, and crisp lotus root for a delicate aromatic balance.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "camellia-custard",
    title: "Camellia Honey Custard",
    price: "$18",
    description:
      "Silk custard infused with camellia blossoms, raw mountain honey, and candied citrus peel.",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=80",
  },
];

export function MenuAccordion() {
  const [activeId, setActiveId] = useState<string>(dishes[0].id);

  const toggleItem = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="menu" className="bg-[#dce5d2] py-24">
      <div className="mx-auto w-[min(92%,920px)]">
        <p className="text-xs tracking-[0.4em] uppercase text-[#3f6250]">Menu</p>
        <h2 className="mt-3 text-4xl text-forest md:text-5xl">Botanical Tasting Highlights</h2>

        <div className="mt-10 divide-y divide-[#7fa18f]/35 rounded-3xl border border-[#7fa18f]/45 bg-white/55 px-6 py-3 shadow-[0_12px_38px_rgba(22,50,39,0.10)] backdrop-blur-md md:px-8">
          {dishes.map((dish) => {
            const expanded = activeId === dish.id;

            return (
              <div key={dish.id} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleItem(dish.id)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                >
                  <div>
                    <h3 className="text-xl text-forest md:text-2xl">{dish.title}</h3>
                    <p className="mt-1 text-sm font-medium text-[#456554]">{dish.price}</p>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-[#365341] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="mt-5 flex flex-col items-start gap-6 pb-2 md:flex-row md:items-center"
                      >
                        <p className="max-w-2xl text-sm leading-relaxed text-[#254236] md:text-base">
                          {dish.description}
                        </p>
                        <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-white/60">
                          <Image
                            src={dish.image}
                            alt={dish.title}
                            fill
                            sizes="112px"
                            className="object-cover"
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
