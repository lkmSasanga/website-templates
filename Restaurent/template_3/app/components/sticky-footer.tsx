import { Flower2, Leaf, MapPin, Send } from "lucide-react";

export function StickyFooter() {
  return (
    <footer className="fixed right-0 bottom-0 left-0 -z-0 h-[46vh] bg-[#0b251d] px-6 py-12 text-[#e8ecdf] md:h-[50vh] md:px-10">
      <div className="mx-auto flex h-full w-[min(95%,1200px)] flex-col justify-between">
        <div>
          <p className="text-xs tracking-[0.42em] uppercase text-[#c8aa6e]">Verdelune Tea House</p>
          <h3 className="mt-4 max-w-2xl text-3xl md:text-4xl">
            An evening sanctuary of floral cuisine, mountain tea, and candlelit garden air.
          </h3>
        </div>

        <div className="flex flex-col gap-4 text-sm text-[#c7d4c5] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Green Terrace Valley, Nuwara Eliya
            </span>
            <span className="inline-flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              Daily 4PM - 11PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 transition hover:text-[#e6ba73]">
              <Send className="h-4 w-4" />
              @verdelune
            </a>
            <a href="#" className="inline-flex items-center gap-2 transition hover:text-[#e6ba73]">
              <Flower2 className="h-4 w-4" />
              Journal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
