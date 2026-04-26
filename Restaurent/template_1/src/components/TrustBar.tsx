import { siteData } from "@/lib/siteData";
import { getTodayHours } from "@/lib/utils";

export default function TrustBar() {
  const todayHours = getTodayHours(siteData.hours);
  const todayHoursStr = todayHours && !todayHours.closed
    ? `${todayHours.open} - ${todayHours.close}`
    : "Closed Today";

  return (
    <section className="bg-gray-800 border-y border-gray-700 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-semibold">
              {siteData.trustBar.rating}
            </span>
            <span className="text-gray-400 text-sm">
              ({siteData.trustBar.reviewCount} reviews)
            </span>
          </div>

          {/* Badges */}
          {siteData.trustBar.badges.map((badge, index) => (
            <div
              key={index}
              className="relative p-[2px] rounded-full"
              style={{
                background: 'linear-gradient(135deg, #f59e0b, #d97706, #b45309, #d97706, #f59e0b)',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease infinite',
              }}
            >
              <div className="px-4 py-2 rounded-full bg-gray-800/90 backdrop-blur-sm">
                <span className="text-gray-100 text-sm font-medium">{badge}</span>
              </div>
            </div>
          ))}

          {/* Today's Hours */}
          <div
            className="relative p-[2px] rounded-full"
            style={{
              background: 'linear-gradient(135deg, #f59e0b, #d97706, #b45309, #d97706, #f59e0b)',
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 3s ease infinite',
            }}
          >
            <div className="px-4 py-2 rounded-full bg-gray-800/90 backdrop-blur-sm">
              <span className="text-gray-100 text-sm font-medium">{todayHoursStr}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
