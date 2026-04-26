import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeaturedDishes from "@/components/FeaturedDishes";
import MenuHighlights from "@/components/MenuHighlights";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import LocationHours from "@/components/LocationHours";
import ReservationCta from "@/components/ReservationCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedDishes />
      <MenuHighlights />
      <Gallery />
      <Testimonials />
      <LocationHours />
      <ReservationCta />
    </>
  );
}
