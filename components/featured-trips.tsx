"use client";

import { featuredDestinations } from "@/src/data/destinations";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { FeaturedTripsCarousel } from "./featured-trips-carousel";
import { SectionHeading } from "./section-heading";

export function FeaturedTrips() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -6% 0px",
  });

  return (
    <section
      id="destacados"
      className="section-padding section-surface-b overflow-x-hidden"
    >
      <div
        ref={ref}
        className={`scroll-reveal container-page max-w-full ${isVisible ? "is-visible" : ""}`}
      >
        <SectionHeading
          eyebrow="Imperdibles"
          title="Viajes destacados"
          titleHighlight="destacados"
          animateUnderline
          subtitle="Planes con información publicada: fechas, precios e inclusiones. Consultá el resto por WhatsApp."
        />

        <FeaturedTripsCarousel destinations={featuredDestinations} />
      </div>
    </section>
  );
}
