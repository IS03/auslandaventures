"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { matchesTravelType } from "@/lib/filters";
import {
  categorySearchParam,
  destinations,
  parseCategorySearchParam,
  type Destination,
  type DestinationCategory,
} from "@/src/data/destinations";

export function useDestinationFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoriaParam = searchParams.get("categoria");

  const [query, setQuery] = useState("");
  const [category, setCategoryState] = useState<DestinationCategory | "Todos">("Todos");
  const [travelType, setTravelType] = useState<string>("Todos");

  useEffect(() => {
    const fromUrl = parseCategorySearchParam(categoriaParam);
    if (fromUrl) {
      setCategoryState(fromUrl);
    } else if (!categoriaParam) {
      setCategoryState("Todos");
    }
  }, [categoriaParam]);

  const setCategory = useCallback(
    (next: DestinationCategory | "Todos") => {
      setCategoryState(next);

      const params = new URLSearchParams(searchParams.toString());
      if (next === "Todos") {
        params.delete("categoria");
      } else {
        params.set("categoria", categorySearchParam[next]);
      }

      const qs = params.toString();
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      router.replace(qs ? `/?${qs}${hash}` : `/${hash}`, { scroll: false });
    },
    [router, searchParams],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const list = destinations.filter((d) => {
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

    return [...list].sort((a, b) => Number(b.hasPhoto) - Number(a.hasPhoto));
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
