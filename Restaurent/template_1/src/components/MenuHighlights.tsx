"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/lib/siteData";
import { cn } from "@/lib/utils";
import Button from "./Button";

export default function MenuHighlights() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/menu.jpg"
          alt="Menu background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Overlay - Gradient from dark to lighter for text visibility */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/75 via-black/55 to-black/65"></div>
        
        {/* Additional subtle overlay for better text contrast */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-2xl">Menu Highlights</h2>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto drop-shadow-lg">
            Explore our carefully curated selection of culinary delights
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {siteData.menuCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "px-6 py-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-white backdrop-blur-sm",
                activeCategory === index
                  ? "bg-white/90 text-gray-900 shadow-lg"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {siteData.menuCategories[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden hover:border-white/40 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 group"
            >
              {/* Image */}
              {item.image && (
                <div className="relative h-40 bg-gradient-to-br from-gray-700/50 to-gray-800/50 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Image overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              )}
              
              {/* Content */}
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white drop-shadow-lg">{item.name}</h3>
                  <span className="text-lg font-bold text-white ml-2 drop-shadow-lg">{item.price}</span>
                </div>
                <p className="text-gray-200 text-sm mb-3 drop-shadow">{item.description}</p>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-xs text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button href="/menu" variant="secondary">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
