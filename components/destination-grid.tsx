import type { Destination } from "@/src/data/destinations";
import { DestinationCard } from "./destination-card";

type DestinationGridProps = {
  destinations: Destination[];
};

export function DestinationGrid({ destinations }: DestinationGridProps) {
  if (destinations.length === 0) {
    return (
      <div
        className="rounded-3xl border-2 border-dashed border-navy/15 bg-white px-6 py-14 text-center shadow-card ring-1 ring-navy/10 sm:py-16"
        role="status"
      >
        <p className="font-sans text-lg font-semibold text-navy sm:text-xl">
          No hay destinos con esos filtros
        </p>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-navy-deep/65">
          Probá otro nombre, cambiá la categoría o el tipo de viaje.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid list-none grid-cols-2 gap-2.5 max-sm:gap-2 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-7">
      {destinations.map((destination) => (
        <li key={destination.slug} className="flex min-w-0 h-full">
          <DestinationCard destination={destination} compact />
        </li>
      ))}
    </ul>
  );
}
