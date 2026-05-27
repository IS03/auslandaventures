export type DestinationCategory = "Nacionales" | "Internacionales" | "Regionales / Full Day";

export type Destination = {
  slug: string;
  title: string;
  category: DestinationCategory;
  type: string;
  description: string;
  priceFrom: number | null;
  /** Ruta en /public. Flyers verticales 1080×1920 — en cards usar object-cover. */
  image: string;
  /** true si hay flyer/foto propia; false usa imagen de marca genérica. */
  hasPhoto: boolean;
  featured: boolean;
  whatsappMessage: string;
};

/** Imagen de respaldo para destinos sin flyer (logo sobre fondo de marca en UI). */
export const destinationImageFallback = "/brand/logo-horizontal.png";

export const destinations: Destination[] = [
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
    image: destinationImageFallback,
    hasPhoto: false,
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
    image: destinationImageFallback,
    hasPhoto: false,
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
    image: destinationImageFallback,
    hasPhoto: false,
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
    slug: "caribe",
    title: "Caribe",
    category: "Internacionales",
    type: "Aéreo",
    description: "Playas paradisíacas, aguas turquesas y una experiencia soñada para desconectar.",
    priceFrom: null,
    image: destinationImageFallback,
    hasPhoto: false,
    featured: true,
    whatsappMessage:
      "Hola, quiero consultar por opciones de viaje al Caribe. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
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

/** Bloques del showcase de categorías (hero de sección tipo “destinos”). */
export const categoryShowcaseBlocks: { category: DestinationCategory; image: string }[] = [
  {
    category: "Nacionales",
    image: "/postcss.config.jpeg",
  },
  {
    category: "Internacionales",
    image: "/tumblr_no92j9qFGq1u6olk4o1_1280.jpg",
  },
  {
    category: "Regionales / Full Day",
    image: "/imagepng.png.webp",
  },
];

/** Solo planes con flyer propio — nada inventado en destacados. */
export const featuredDestinations = destinations.filter((d) => d.featured && d.hasPhoto);

export const destinationsWithPhoto = destinations.filter((d) => d.hasPhoto);
