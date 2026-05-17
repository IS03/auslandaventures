"use client";

import type { DestinationCategory } from "@/src/data/destinations";
import { destinationCategories } from "@/src/data/destinations";

type CategoryTabsProps = {
  active: DestinationCategory | "Todos";
  onChange: (category: DestinationCategory | "Todos") => void;
};

const allCategories: (DestinationCategory | "Todos")[] = ["Todos", ...destinationCategories];

const shortLabel: Record<DestinationCategory | "Todos", string> = {
  Todos: "Todos",
  Nacionales: "Nacionales",
  Internacionales: "Internacionales",
  "Regionales / Full Day": "Regionales",
};

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div
      className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-hide sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
      role="tablist"
      aria-label="Categorías de viaje"
    >
      {allCategories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat)}
            className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky ${
              isActive
                ? "bg-navy text-white shadow-md shadow-navy/20"
                : "bg-white text-navy ring-1 ring-navy/10 hover:bg-sky/8 hover:ring-sky/35 active:scale-[0.98]"
            }`}
          >
            {shortLabel[cat]}
          </button>
        );
      })}
    </div>
  );
}
