import { featuredDestinations } from "@/src/data/destinations";
import { DestinationCard } from "./destination-card";
import { SectionHeading } from "./section-heading";

export function FeaturedTrips() {
  return (
    <section
      id="destacados"
      className="section-padding bg-gradient-to-br from-navy via-navy-deep to-[#0a1d45]"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Imperdibles"
          title="Viajes destacados"
          subtitle="Algunos de los planes que podés consultar hoy con nuestro equipo."
          light
        />

        <ul className="scrollbar-hide -mx-4 mt-9 flex list-none gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory sm:mt-10 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 lg:gap-7">
          {featuredDestinations.map((destination, index) => (
            <li
              key={destination.slug}
              className="w-[min(85vw,300px)] shrink-0 snap-center md:w-auto"
            >
              <DestinationCard
                destination={destination}
                priority={index < 2}
                onDarkSection
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
