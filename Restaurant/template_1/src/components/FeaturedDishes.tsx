"use client";

import Image from "next/image";
import { siteData } from "@/lib/siteData";
import { useState } from "react";

function DishImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);
  
  if (imageError || !src) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500">
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      onError={() => setImageError(true)}
    />
  );
}

export default function FeaturedDishes() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Dishes</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our chef's signature creations, crafted with passion and the finest ingredients
          </p>
        </div>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.featuredDishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 hover:shadow-xl hover:shadow-gray-900/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                <DishImage src={dish.image || ""} alt={dish.name} />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{dish.name}</h3>
                  <span className="text-lg font-bold text-white ml-2">{dish.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{dish.description}</p>
                <div className="flex flex-wrap gap-2">
                  {dish.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-700/50 border border-gray-600 rounded text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
