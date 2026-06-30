"use client";

import { useCallback, useRef } from "react";
import type { Destination } from "@/src/data/destinations";
import { DestinationCard } from "./destination-card";

type FeaturedTripsCarouselProps = {
  destinations: Destination[];
};

const scrollBtnClass =
  "absolute top-[38%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-card ring-1 ring-navy/10 transition hover:bg-sky/10 hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky md:flex";

export function FeaturedTripsCarousel({ destinations }: FeaturedTripsCarouselProps) {
  const scrollerRef = useRef<HTMLUListElement>(null);

  const scrollByCard = useCallback((direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const firstCard = scroller.querySelector<HTMLElement>("li");
    const gap = 16;
    const step = firstCard ? firstCard.offsetWidth + gap : 280;

    scroller.scrollBy({
      left: direction * step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, []);

  if (destinations.length === 0) {
    return null;
  }

  return (
    <div className="relative mt-9 sm:mt-10 md:px-12">
      {destinations.length > 1 && (
        <>
          <button
            type="button"
            className={`${scrollBtnClass} -left-1`}
            aria-label="Ver destacados anteriores"
            onClick={() => scrollByCard(-1)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className={`${scrollBtnClass} -right-1`}
            aria-label="Ver más destacados"
            onClick={() => scrollByCard(1)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      <ul
        ref={scrollerRef}
        className="scrollbar-hide -mx-4 flex list-none gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory md:mx-0 md:px-0"
        aria-label="Viajes destacados"
      >
        {destinations.map((destination) => (
          <li
            key={destination.slug}
            className="w-[min(82vw,260px)] shrink-0 snap-start sm:w-[248px] lg:w-[264px]"
          >
            <DestinationCard destination={destination} cropFlyer compact />
          </li>
        ))}
      </ul>
    </div>
  );
}
