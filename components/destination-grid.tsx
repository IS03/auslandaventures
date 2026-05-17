import type { Destination } from "@/src/data/destinations";
import { DestinationCard } from "./destination-card";

type DestinationGridProps = {
  destinations: Destination[];
};

export function DestinationGrid({ destinations }: DestinationGridProps) {
  if (destinations.length === 0) {
    return (
      <div
        className="rounded-3xl border-2 border-dashed border-navy/12 bg-white/70 px-6 py-14 text-center sm:py-16"
        role="status"
      >
        <p className="font-display text-xl text-navy sm:text-2xl">
          No hay destinos con esos filtros
        </p>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-navy-deep/65">
          Probá otro nombre, cambiá la categoría o el tipo de viaje.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid list-none gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
      {destinations.map((destination) => (
        <li key={destination.slug} className="min-w-0">
          <DestinationCard destination={destination} />
        </li>
      ))}
    </ul>
  );
}
