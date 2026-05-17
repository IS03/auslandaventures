import {
  cataratasPlanTerms,
  defaultDomesticPlanTerms,
  type TravelPlan,
} from "./plan-types";

export type { TravelPlan, PlanDeparture, AccommodationTier, PlanTerms } from "./plan-types";

const EXTRACTED_AT = "2026-05-17";

/**
 * Base de planes extraída manualmente de flyers en public/destinos y public/marketing.
 * Un destino puede tener varios planes (fechas / noches / precios distintos).
 */
export const travelPlans: TravelPlan[] = [
  {
    id: "puerto-madryn-2025",
    destinationSlug: "puerto-madryn",
    title: "Puerto Madryn",
    tagline: "Recorré con nosotros",
    departures: [
      { label: "13 ago", day: 13, month: 8 },
      { label: "9 sep", day: 9, month: 9 },
      { label: "13 sep", day: 13, month: 9 },
      { label: "8 oct", day: 8, month: 10 },
    ],
    nights: 3,
    transport: "Traslados en Bus Mix",
    mealPlan: "Desayuno",
    accommodationTiers: [
      {
        id: "hostal-rayentray",
        name: "Hostal Rayentray",
        features: ["Desayuno continental", "Céntrico"],
        priceFrom: 449_000,
      },
      {
        id: "grand-hotel-rayentray",
        name: "Grand Hotel Rayentray",
        features: ["Desayuno", "Hab. en suite", "Pileta climatizada"],
        priceFrom: 599_000,
      },
    ],
    priceFrom: 449_000,
    currency: "ARS",
    image: "/destinos/puerto-madryn.png",
    sourceImages: [
      "/destinos/puerto-madryn.png",
      "/destinos/planes/puerto-madryn-agosto.png",
      "/marketing/promo-01-puerto-madryn.png",
    ],
    includes: [
      "Traslados en Bus Mix",
      "3 noches de alojamiento",
      "Régimen de desayuno",
      "Coordinador permanente",
      "Asistencia médica",
    ],
    excursions: [
      "City Tour",
      "Península Valdés",
      "Puerto Pirámides",
      "Valle Inferior",
      "Rawson Trelew",
      "Gaiman",
    ],
    notes: "Ingresos a parques y/o reservas no incluidos.",
    terms: {
      ...defaultDomesticPlanTerms,
      otherExclusions: ["Ingresos a parques y/o reservas no incluidos."],
    },
    extractedAt: EXTRACTED_AT,
  },
  {
    id: "salta-mayo-junio",
    destinationSlug: "salta",
    title: "Conocé Salta la Linda",
    departures: [
      { label: "21 may", day: 21, month: 5 },
      { label: "11 jun", day: 11, month: 6 },
    ],
    nights: 3,
    transport: "Traslados en Bus Mix",
    mealPlan: "Desayuno",
    priceFrom: 359_000,
    currency: "ARS",
    image: "/destinos/salta.png",
    sourceImages: ["/destinos/salta.png", "/marketing/explora-sur-argentino-01.png"],
    includes: [
      "Traslados en Bus Mix",
      "3 noches de alojamiento",
      "Régimen de desayuno",
      "Coordinador permanente",
      "Asistencia médica",
    ],
    excursions: ["City Tour", "Quebrada de Humahuaca", "Cafayate", "Tafí del Valle"],
    notes: "Ingresos a parques y/o reservas no incluidos.",
    terms: {
      ...defaultDomesticPlanTerms,
      otherExclusions: ["Ingresos a parques y/o reservas no incluidos."],
    },
    extractedAt: EXTRACTED_AT,
  },
  {
    id: "cataratas-mayo-junio",
    destinationSlug: "cataratas",
    title: "Cataratas del Iguazú",
    tagline: "Una de las 7 maravillas naturales del mundo",
    departures: [
      { label: "21 may", day: 21, month: 5 },
      { label: "13 jun", day: 13, month: 6 },
    ],
    nights: 3,
    days: 5,
    transport: "Bus Mix",
    hotel: "Hotel Sol Cataratas",
    mealPlan: "Media pensión",
    priceFrom: 379_000,
    currency: "ARS",
    image: "/destinos/cataratas.png",
    sourceImages: ["/destinos/cataratas.png", "/marketing/promo-03.png"],
    includes: [
      "3 noches de alojamiento (5 días total)",
      "Hotel Sol Cataratas",
      "Media pensión",
      "Coordinación permanente",
      "Asistencia médica",
    ],
    excursions: [
      "Ruinas de San Ignacio",
      "Minas de Wanda",
      "Cataratas argentinas y brasileñas",
    ],
    terms: cataratasPlanTerms,
    extractedAt: EXTRACTED_AT,
  },
  {
    id: "cataratas-julio",
    destinationSlug: "cataratas",
    title: "Cataratas del Iguazú",
    tagline: "Una de las 7 maravillas naturales del mundo",
    departures: [
      { label: "4 jul", day: 4, month: 7 },
      { label: "11 jul", day: 11, month: 7 },
    ],
    nights: 4,
    days: 6,
    transport: "Bus Mix",
    hotel: "Hotel Sol Cataratas",
    mealPlan: "Media pensión",
    priceFrom: 569_000,
    currency: "ARS",
    image: "/destinos/planes/cataratas-julio.png",
    sourceImages: ["/destinos/planes/cataratas-julio.png", "/marketing/promo-04.png"],
    includes: [
      "4 noches de alojamiento (6 días total)",
      "Hotel Sol Cataratas",
      "Media pensión",
      "Coordinación permanente",
      "Asistencia médica",
    ],
    excursions: [
      "Ruinas de San Ignacio",
      "Minas de Wanda",
      "Cataratas argentinas y brasileñas",
    ],
    terms: {
      ...cataratasPlanTerms,
      occupancyBasis: "Precio por persona en base doble.",
    },
    extractedAt: EXTRACTED_AT,
  },
  {
    id: "cataratas-agosto-sep",
    destinationSlug: "cataratas",
    title: "Cataratas del Iguazú",
    tagline: "Una de las 7 maravillas naturales del mundo",
    departures: [
      { label: "15 ago", day: 15, month: 8 },
      { label: "13 sep", day: 13, month: 9 },
    ],
    nights: 3,
    days: 5,
    transport: "Bus Mix",
    hotel: "Hotel Sol Cataratas",
    mealPlan: "Media pensión",
    priceFrom: 439_000,
    currency: "ARS",
    image: "/destinos/planes/cataratas-agosto.png",
    sourceImages: [
      "/destinos/planes/cataratas-agosto.png",
      "/marketing/explora-sur-argentino.png",
    ],
    includes: [
      "3 noches de alojamiento (5 días total)",
      "Hotel Sol Cataratas",
      "Media pensión",
      "Coordinación permanente",
      "Asistencia médica",
    ],
    excursions: [
      "Ruinas de San Ignacio",
      "Minas de Wanda",
      "Cataratas argentinas y brasileñas",
    ],
    terms: cataratasPlanTerms,
    extractedAt: EXTRACTED_AT,
  },
  {
    id: "brasil-canasvieiras",
    destinationSlug: "brasil-canasvieiras",
    title: "Canasvieiras — Lo mejor pasa en Brasil",
    season: { label: "Noviembre a abril", fromMonth: 11, toMonth: 4 },
    departures: [{ label: "Noviembre a abril (temporada)" }],
    nights: 7,
    transport: "Bus semi cama ida y vuelta + servicio a bordo",
    hotel: "Residencial Amigos / Dom Luis",
    mealPlan: "Apartamento equipado (opcionales: media pensión, solo desayuno o solo cena)",
    priceFrom: 560_000,
    currency: "ARS",
    image: "/destinos/brasil-canasvieiras.png",
    sourceImages: [
      "/destinos/brasil-canasvieiras.png",
      "/marketing/explora-sur-argentino-05.png",
    ],
    includes: [
      "7 noches a 400 m del mar",
      "Apartamento equipado",
      "Coordinación en ruta",
      "Asistencia médica",
      "Bonus: excursión de regalo + cena de bienvenida",
    ],
    excursions: ["Excursiones en destino — consultar cuotas"],
    optionalExtras: [
      "Butaca cama",
      "Butacas panorámicas",
      "Media pensión, solo desayuno o solo cena",
    ],
    paymentNotes: ["Paga de 6 a 10 cuotas"],
    notes: "Excursiones en destino con costo adicional.",
    terms: {
      currency: "ARS",
      perPerson: true,
      taxesIncluded: true,
      adminFeeNote: "Consultar condiciones de reserva y gastos administrativos.",
      childPolicy: [],
      otherExclusions: ["Excursiones en destino no incluidas salvo la de regalo indicada."],
    },
    extractedAt: EXTRACTED_AT,
  },
];

export function plansByDestination(slug: string): TravelPlan[] {
  return travelPlans.filter((p) => p.destinationSlug === slug);
}

export function planById(id: string): TravelPlan | undefined {
  return travelPlans.find((p) => p.id === id);
}

/** Menor precio publicado entre todos los planes de un destino. */
export function minPriceForDestination(slug: string): number | null {
  const plans = plansByDestination(slug);
  if (plans.length === 0) return null;
  return Math.min(...plans.map((p) => p.priceFrom));
}

/** Texto corto de salidas para cards (ej. "21 may · 11 jun"). */
export function formatDeparturesShort(plan: TravelPlan, max = 4): string {
  const labels = plan.departures.map((d) => d.label);
  if (labels.length <= max) return labels.join(" · ");
  return `${labels.slice(0, max).join(" · ")} +${labels.length - max}`;
}

export type DestinationCardMeta = {
  priceFrom: number;
  planLine: string;
};

/** Datos de card derivados de flyers (precio mínimo + salidas/noches). */
export function getDestinationCardMeta(slug: string): DestinationCardMeta | null {
  const plans = plansByDestination(slug);
  if (plans.length === 0) return null;

  const priceFrom = minPriceForDestination(slug)!;
  const departureLabels = [...new Set(plans.flatMap((p) => p.departures.map((d) => d.label)))];

  const maxDepartures = 3;
  const departuresText =
    departureLabels.length <= maxDepartures
      ? departureLabels.join(" · ")
      : `${departureLabels.slice(0, 2).join(" · ")} +${departureLabels.length - 2} salidas`;

  const nights = [...new Set(plans.map((p) => p.nights))].sort((a, b) => a - b);
  const nightsText =
    nights.length === 1 ? `${nights[0]} noches` : `${nights[0]}–${nights[nights.length - 1]} noches`;

  const planLine = `${departuresText} · ${nightsText}`;

  return { priceFrom, planLine };
}

/** Imágenes de flyer para lightbox (una por variante de plan, sin duplicados). */
export function getFlyerImagesForDestination(
  slug: string,
  fallbackImage?: string,
): string[] {
  const fromPlans = [...new Set(plansByDestination(slug).map((p) => p.image))];
  if (fromPlans.length > 0) return fromPlans;
  if (fallbackImage) return [fallbackImage];
  return [];
}
