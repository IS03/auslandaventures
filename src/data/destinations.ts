import {
  currencyForDestination,
  minPriceForDestination,
  travelPlans,
} from "./travel-plans";

export type DestinationCategory = "Nacionales" | "Internacionales" | "Regionales / Full Day";

export type DestinationPriceCurrency = "ARS" | "USD";

export type Destination = {
  slug: string;
  title: string;
  category: DestinationCategory;
  type: string;
  description: string;
  priceFrom: number | null;
  /** Moneda de `priceFrom` cuando no hay plan en travel-plans (default ARS). */
  priceCurrency?: DestinationPriceCurrency;
  /** Ruta en /public. Flyers verticales 1080×1920 — en cards usar object-cover. */
  image: string;
  /** true si hay flyer/foto propia; false usa imagen de marca genérica. */
  hasPhoto: boolean;
  featured: boolean;
  /** Tiene al menos un plan con detalle en travel-plans.ts */
  hasTravelPlan: boolean;
  whatsappMessage: string;
};

type DestinationInput = Omit<Destination, "hasTravelPlan" | "priceFrom" | "priceCurrency"> & {
  /** Fallback si no hay plan en travel-plans.ts */
  priceFrom?: number | null;
  priceCurrency?: DestinationPriceCurrency;
};

const SLUGS_WITH_TRAVEL_PLANS = new Set(travelPlans.map((p) => p.destinationSlug));

/** Imagen de respaldo para destinos sin flyer (logo sobre fondo de marca en UI). */
export const destinationImageFallback = "/brand/logo-horizontal.png";

const destinationList: DestinationInput[] = [
  {
    slug: "puerto-madryn",
    title: "Puerto Madryn",
    category: "Nacionales",
    type: "Bus / Aéreo",
    description: "Naturaleza, fauna marina y paisajes únicos para vivir una experiencia diferente en la Patagonia.",
    priceFrom: 449_000,
    image: "/destinos/puerto-madryn.png",
    hasPhoto: true,
    featured: true,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Puerto Madryn. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "salta",
    title: "Salta",
    category: "Nacionales",
    type: "Bus / Aéreo",
    description: "Paisajes del norte argentino, cultura, gastronomía y aventura en un destino inolvidable.",
    priceFrom: 359_000,
    image: "/destinos/salta.png",
    hasPhoto: true,
    featured: true,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Salta. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "cataratas",
    title: "Cataratas",
    category: "Nacionales",
    type: "Bus / Aéreo",
    description: "Una maravilla natural para conectar con la selva, el agua y una experiencia única.",
    priceFrom: 379_000,
    image: "/destinos/cataratas.png",
    hasPhoto: true,
    featured: true,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Cataratas. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "termas-rio-hondo",
    title: "Termas de Río Hondo",
    category: "Nacionales",
    type: "Bus",
    description: "Relax, termas y descanso para cortar la rutina y disfrutar unos días diferentes.",
    priceFrom: null,
    image: "/destinos/termas-rio-hondo.png",
    hasPhoto: true,
    featured: false,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Termas de Río Hondo. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "mendoza",
    title: "Mendoza",
    category: "Nacionales",
    type: "Bus / Aéreo",
    description: "Montañas, bodegas, paisajes y experiencias para disfrutar una escapada completa.",
    priceFrom: null,
    image: "/destinos/mendoza.png",
    hasPhoto: true,
    featured: false,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Mendoza. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "buenos-aires",
    title: "Buenos Aires",
    category: "Nacionales",
    type: "Bus / Aéreo",
    description: "Ciudad, cultura, espectáculos, compras y paseos para vivir una salida distinta.",
    priceFrom: null,
    image: "/destinos/buenos-aires.png",
    hasPhoto: true,
    featured: false,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Buenos Aires. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "brasil-canasvieiras",
    title: "Brasil Canasvieiras",
    category: "Internacionales",
    type: "Bus",
    description: "Playa, verano y descanso en uno de los clásicos más elegidos del sur de Brasil.",
    priceFrom: 560_000,
    image: "/destinos/brasil-canasvieiras.png",
    hasPhoto: true,
    featured: true,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Brasil Canasvieiras. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "brasil-torres",
    title: "Brasil Torres",
    category: "Internacionales",
    type: "Bus",
    description: "Playas, paisajes costeros y una experiencia ideal para disfrutar Brasil en grupo.",
    priceFrom: null,
    image: destinationImageFallback,
    hasPhoto: false,
    featured: false,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Brasil Torres. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "mexico-cancun",
    title: "México — Cancún",
    category: "Internacionales",
    type: "Aéreo",
    description: "Playa, sol y all inclusive en uno de los destinos más buscados del Caribe mexicano.",
    priceFrom: null,
    image: "/destinos/mexico-cancun.png",
    hasPhoto: true,
    featured: true,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Cancún. Somos [CANTIDAD] personas y queremos saber fechas, hotel y precio.",
  },
  {
    slug: "mexico-playa-del-carmen",
    title: "México — Playa del Carmen",
    category: "Internacionales",
    type: "Aéreo",
    description: "Riviera Maya, playas y resorts para una escapada completa al Caribe mexicano.",
    priceFrom: null,
    image: "/destinos/mexico-playa-del-carmen.png",
    hasPhoto: true,
    featured: false,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Playa del Carmen. Somos [CANTIDAD] personas y queremos saber fechas, hotel y precio.",
  },
  {
    slug: "punta-cana",
    title: "Punta Cana",
    category: "Internacionales",
    type: "Aéreo",
    description: "República Dominicana: playas de ensueño y resorts all inclusive en el corazón del Caribe.",
    priceFrom: 2050,
    priceCurrency: "USD",
    image: "/destinos/punta-cana.png",
    hasPhoto: true,
    featured: true,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Punta Cana. Somos [CANTIDAD] personas y queremos saber fechas, hotel y precio.",
  },
  {
    slug: "brasil-rio-de-janeiro",
    title: "Brasil — Río de Janeiro",
    category: "Internacionales",
    type: "Aéreo",
    description: "Ciudad maravillosa, playas icónicas y la energía única de Río en grupo.",
    priceFrom: null,
    image: destinationImageFallback,
    hasPhoto: false,
    featured: false,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Río de Janeiro. Somos [CANTIDAD] personas y queremos saber fechas y precio.",
  },
  {
    slug: "aruba",
    title: "Aruba",
    category: "Internacionales",
    type: "Aéreo",
    description: "Aguas turquesas y estadías en estudios equipados con opciones para todos los presupuestos.",
    priceFrom: 1390,
    priceCurrency: "USD",
    image: "/destinos/aruba.png",
    hasPhoto: true,
    featured: false,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Aruba. Somos [CANTIDAD] personas y queremos saber fechas, hotel y precio.",
  },
  {
    slug: "maceio",
    title: "Maceio / Maragogi",
    category: "Internacionales",
    type: "Aéreo",
    description: "Nordeste brasileño: playas, piscinas naturales y alojamiento con desayuno en Maceió o Maragogi.",
    priceFrom: 1150,
    priceCurrency: "USD",
    image: destinationImageFallback,
    hasPhoto: false,
    featured: false,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Maceió o Maragogi. Somos [CANTIDAD] personas y queremos saber fechas y precio.",
  },
  {
    slug: "bayahibe",
    title: "Bayahibe",
    category: "Internacionales",
    type: "Aéreo",
    description: "República Dominicana all inclusive en Sunscape Dominicus La Romana, cerca de Punta Cana.",
    priceFrom: 2170,
    priceCurrency: "USD",
    image: destinationImageFallback,
    hasPhoto: false,
    featured: false,
    whatsappMessage:
      "Hola, quiero consultar por el viaje a Bayahibe. Somos [CANTIDAD] personas y queremos saber fechas y precio.",
  },
  {
    slug: "cura-brochero",
    title: "Cura Brochero",
    category: "Regionales / Full Day",
    type: "Full Day",
    description: "Una salida regional para conocer historia, paisajes serranos y rincones de Córdoba.",
    priceFrom: null,
    image: destinationImageFallback,
    hasPhoto: false,
    featured: false,
    whatsappMessage:
      "Hola, quiero consultar por la salida a Cura Brochero. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "salinas-grandes",
    title: "Salinas Grandes",
    category: "Regionales / Full Day",
    type: "Full Day",
    description: "Una experiencia distinta entre paisajes blancos, fotos increíbles y aventura regional.",
    priceFrom: null,
    image: destinationImageFallback,
    hasPhoto: false,
    featured: true,
    whatsappMessage:
      "Hola, quiero consultar por la salida a Salinas Grandes. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "villa-general-belgrano",
    title: "Villa General Belgrano",
    category: "Regionales / Full Day",
    type: "Full Day",
    description: "Un clásico serrano con encanto, gastronomía, paisajes y paseos para disfrutar en el día.",
    priceFrom: null,
    image: destinationImageFallback,
    hasPhoto: false,
    featured: false,
    whatsappMessage:
      "Hola, quiero consultar por la salida a Villa General Belgrano. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "mar-chiquita",
    title: "Mar Chiquita",
    category: "Regionales / Full Day",
    type: "Full Day",
    description: "Naturaleza, costa cordobesa y una escapada diferente para descubrir paisajes únicos.",
    priceFrom: null,
    image: destinationImageFallback,
    hasPhoto: false,
    featured: false,
    whatsappMessage:
      "Hola, quiero consultar por la salida a Mar Chiquita. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
];

export const destinations: Destination[] = destinationList.map((d) => {
  const hasTravelPlan = SLUGS_WITH_TRAVEL_PLANS.has(d.slug);
  const planPrice = minPriceForDestination(d.slug);
  const planCurrency = currencyForDestination(d.slug);

  return {
    ...d,
    hasTravelPlan,
    priceFrom: planPrice ?? d.priceFrom ?? null,
    priceCurrency: planCurrency ?? d.priceCurrency ?? "ARS",
  };
});

export const destinationCategories: DestinationCategory[] = [
  "Nacionales",
  "Internacionales",
  "Regionales / Full Day",
];

/** Slug para enlaces `/?categoria=…#viajes` al explorador. */
export const categorySearchParam: Record<DestinationCategory, string> = {
  Nacionales: "nacionales",
  Internacionales: "internacionales",
  "Regionales / Full Day": "regionales",
};

export function parseCategorySearchParam(
  value: string | null | undefined,
): DestinationCategory | null {
  if (!value) return null;
  const key = value.trim().toLowerCase();
  const found = (
    Object.entries(categorySearchParam) as [DestinationCategory, string][]
  ).find(([, slug]) => slug === key);
  return found?.[0] ?? null;
}

export function hrefForCategoryExplorer(category: DestinationCategory): string {
  return `/?categoria=${categorySearchParam[category]}#viajes`;
}

/** URL indexable de landing por categoría (SEO). */
export function hrefForCategoryPage(category: DestinationCategory): string {
  return `/viajes/${categorySearchParam[category]}`;
}

export function destinationsInCategory(category: DestinationCategory): Destination[] {
  return destinations.filter((d) => d.category === category);
}

/** Bloques del showcase de categorías (hero de sección tipo “destinos”). */
export const categoryShowcaseBlocks: { category: DestinationCategory; image: string }[] = [
  {
    category: "Nacionales",
    image: "/categorias/nacionales.jpeg",
  },
  {
    category: "Internacionales",
    image: "/categorias/internacionales.jpg",
  },
  {
    category: "Regionales / Full Day",
    image: "/categorias/regionales.webp",
  },
];

/** Imagen de respaldo por categoría para cards sin flyer. */
export const categoryPlaceholderImage: Record<DestinationCategory, string> = {
  Nacionales: categoryShowcaseBlocks[0].image,
  Internacionales: categoryShowcaseBlocks[1].image,
  "Regionales / Full Day": categoryShowcaseBlocks[2].image,
};

/** Etiqueta corta para badges en móvil. */
export const categoryShortLabel: Record<DestinationCategory, string> = {
  Nacionales: "Nacional",
  Internacionales: "Internacional",
  "Regionales / Full Day": "Regional",
};

/** Destacados: con flyer o con plan publicado (fechas/precios). */
export const featuredDestinations = destinations.filter(
  (d) => d.featured && (d.hasPhoto || d.hasTravelPlan),
);

export const destinationsWithPhoto = destinations.filter((d) => d.hasPhoto);

export function destinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function hrefForDestination(slug: string): string {
  return `/destinos/${slug}`;
}
