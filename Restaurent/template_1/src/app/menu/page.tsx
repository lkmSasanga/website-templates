import Image from "next/image";
import { siteData } from "@/lib/siteData";

export default function MenuPage() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our complete selection of culinary delights, crafted with passion and the finest ingredients
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {siteData.menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-700">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 hover:shadow-lg hover:shadow-gray-900/50 transition-all duration-300 group"
                  >
                    {/* Image */}
                    {item.image && (
                      <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                        <span className="text-lg font-bold text-white ml-2">{item.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-700/50 border border-gray-600 rounded text-xs text-gray-300"
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
            </div>
          ))}
        </div>

        {/* Featured Dishes Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-700">
            Featured Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 hover:shadow-lg hover:shadow-gray-900/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{dish.name}</h3>
                    <span className="text-lg font-bold text-white ml-2">{dish.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{dish.description}</p>
                  {dish.tags && dish.tags.length > 0 && (
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
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
