import { featuredDestinations } from "@/src/data/destinations";
import { DestinationCard } from "./destination-card";
import { SectionHeading } from "./section-heading";

export function FeaturedTrips() {
  return (
    <section
      id="destacados"
      className="section-padding overflow-x-hidden bg-gradient-to-br from-navy via-navy-deep to-[#0a1d45]"
    >
      <div className="container-page max-w-full">
        <SectionHeading
          eyebrow="Imperdibles"
          title="Viajes destacados"
          subtitle="Planes con fechas y precios publicados. El resto del catálogo lo confirmamos por WhatsApp."
          light
        />

        <ul className="scrollbar-hide -mx-4 mt-9 flex list-none gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory sm:mt-10 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 lg:gap-7">
          {featuredDestinations.map((destination) => (
            <li
              key={destination.slug}
              className="w-[min(85vw,300px)] shrink-0 snap-center md:w-auto md:min-w-0"
            >
              <DestinationCard destination={destination} onDarkSection />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
