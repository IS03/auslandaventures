import { featuredDestinations } from "@/src/data/destinations";
import { FeaturedTripsCarousel } from "./featured-trips-carousel";
import { SectionHeading } from "./section-heading";

export function FeaturedTrips() {
  return (
    <section
      id="destacados"
      className="section-padding section-surface-b overflow-x-hidden"
    >
      <div className="container-page max-w-full">
        <SectionHeading
          eyebrow="Imperdibles"
          title="Viajes destacados"
          subtitle="Planes con información publicada: fechas, precios e inclusiones. Consultá el resto por WhatsApp."
        />

        <FeaturedTripsCarousel destinations={featuredDestinations} />
      </div>
    </section>
  );
}
