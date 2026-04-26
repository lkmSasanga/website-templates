import Button from "./Button";
import { siteData } from "@/lib/siteData";

export default function ReservationCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Experience Excellence?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Reserve your table today and let us create an unforgettable dining experience for you
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/reserve" variant="primary" className="text-lg px-8 py-4 shadow-2xl shadow-amber-500/30">
            {siteData.hero.ctaPrimary}
          </Button>
          <Button href={`tel:${siteData.contact.phone}`} variant="outline" className="text-lg px-8 py-4">
            Call {siteData.contact.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
