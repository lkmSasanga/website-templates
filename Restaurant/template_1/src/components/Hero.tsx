"use client";

import Image from "next/image";
import { siteData } from "@/lib/siteData";
import Button from "./Button";
import { isOpenNow } from "@/lib/utils";
import { useState } from "react";

export default function Hero() {
  const open = isOpenNow(siteData.hours);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient - only visible if image fails to load */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0"></div>
        )}
        {!imageError && (
          <Image
            src="/images/backgrounds/hero.jpg"
            alt="Restaurant ambiance"
            fill
            priority
            className="object-cover z-0"
            sizes="100vw"
            quality={90}
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Overlay - Gradient from dark to lighter for text visibility */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/75 via-black/55 to-black/65"></div>
      
      {/* Additional subtle overlay for better text contrast */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Open Badge */}
        {open && (
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-green-500/30 backdrop-blur-sm border border-green-500/60 rounded-full text-green-300 text-sm font-medium shadow-lg shadow-green-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Open Now
          </div>
        )}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
          {siteData.hero.headline}
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-lg">
          {siteData.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/reserve" variant="primary" className="text-lg px-8 py-4 shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60">
            {siteData.hero.ctaPrimary}
          </Button>
          <Button href="/menu" variant="outline" className="backdrop-blur-sm bg-white/10 border-white/30 hover:bg-white/20">
            {siteData.hero.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
