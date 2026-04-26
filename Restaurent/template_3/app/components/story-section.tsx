"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const storyCards = [
  {
    title: "The Botanical Chef",
    body: "Our chef composes seasonal tasting rituals from rare blossoms, mountain herbs, and tea-smoked harvests.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Floral Ingredients",
    body: "Jasmine buds, elderflower nectar, and hand-plucked greens from private gardens define each plated moment.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Origins in Mist",
    body: "Verdelune was born beside highland tea slopes where cloud-kissed leaves and botanical craft shape our table.",
    image:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=1200&q=80",
  },
];

export function StorySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const maxTranslate = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -Math.max(maxTranslate, 0),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(maxTranslate, 0) + window.innerHeight * 0.65}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="story" ref={sectionRef} className="relative bg-[#f8f5ec] py-20">
      <div className="mx-auto mb-12 w-[min(92%,1200px)]">
        <p className="text-xs tracking-[0.4em] uppercase text-[#406251]">Story</p>
        <h2 className="mt-3 text-4xl text-forest md:text-5xl">A Journey Through Garden & Fire</h2>
      </div>

      <div ref={trackRef} className="flex w-max gap-10 px-[4vw]">
        {storyCards.map((card) => (
          <article
            key={card.title}
            className="glass flex h-[66vh] w-[82vw] max-w-[560px] shrink-0 flex-col overflow-hidden rounded-[2rem] bg-white/50"
          >
            <div className="relative h-[58%] w-full">
              <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 82vw, 560px" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-center p-7">
              <h3 className="text-2xl text-forest">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#294838] md:text-base">{card.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
