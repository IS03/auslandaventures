"use client";

import { useMemo, useState } from "react";
import { matchesTravelType } from "@/lib/filters";
import {
  destinations,
  type Destination,
  type DestinationCategory,
} from "@/src/data/destinations";

export function useDestinationFilters() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DestinationCategory | "Todos">("Todos");
  const [travelType, setTravelType] = useState<string>("Todos");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return destinations.filter((d) => {
      if (category !== "Todos" && d.category !== category) return false;
      if (!matchesTravelType(d.type, travelType)) return false;
      if (!q) return true;
      return (
        d.title.toLowerCase().includes(q) ||
        d.slug.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q) ||
        d.type.toLowerCase().includes(q)
      );
    });
  }, [query, category, travelType]);

  return {
    query,
    setQuery,
    category,
    setCategory,
    travelType,
    setTravelType,
    filtered,
    total: destinations.length,
  };
}

export type { Destination };
