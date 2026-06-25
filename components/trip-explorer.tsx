"use client";

import { useDestinationFilters } from "@/hooks/use-destination-filters";
import { CategoryTabs } from "./category-tabs";
import { DestinationGrid } from "./destination-grid";
import { SectionHeading } from "./section-heading";
import { TripSearch } from "./trip-search";

export function TripExplorer() {
  const {
    query,
    setQuery,
    category,
    setCategory,
    travelType,
    setTravelType,
    filtered,
    total,
  } = useDestinationFilters();

  return (
    <section
      id="viajes"
      className="section-padding section-surface-c overflow-x-hidden"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Explorá"
          title="Encontrá tu próximo viaje"
          subtitle="Filtrá por categoría, destino o tipo de transporte. Cada consulta se confirma con nuestro equipo por WhatsApp."
        />

        <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
          <TripSearch
            query={query}
            onQueryChange={setQuery}
            travelType={travelType}
            onTravelTypeChange={setTravelType}
            resultCount={filtered.length}
            totalCount={total}
          />

          <CategoryTabs active={category} onChange={setCategory} />

          <div id="resultados-viajes" role="region" aria-label="Resultados de búsqueda">
            <DestinationGrid destinations={filtered} />
          </div>
        </div>
      </div>
    </section>
  );
}
