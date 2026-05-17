/** Tipos compartidos para planes extraídos de flyers (1080×1920). */

export type PlanCurrency = "ARS";

/** Salida con fecha parcial (año = temporada del flyer; confirmar con la agencia). */
export type PlanDeparture = {
  label: string;
  day?: number;
  month?: number;
};

export type PlanSeason = {
  label: string;
  fromMonth: number;
  toMonth: number;
};

export type AccommodationTier = {
  id: string;
  name: string;
  features: string[];
  priceFrom: number;
};

/** Condiciones legales repetidas en casi todos los flyers nacionales. */
export type PlanTerms = {
  currency: PlanCurrency;
  perPerson: boolean;
  taxesIncluded: boolean;
  occupancyBasis?: string;
  adminFeeNote: string;
  childPolicy: string[];
  otherExclusions: string[];
};

export const defaultDomesticPlanTerms: PlanTerms = {
  currency: "ARS",
  perPerson: true,
  taxesIncluded: true,
  adminFeeNote: "No incluye 3,5% por gastos administrativos y de reserva.",
  childPolicy: [
    "De 0 a 2 años: sin cargo (sin servicios) acompañado por 2 adultos; paga $15.000 netos por asistencia médica.",
    "De 3 años en adelante: abona tarifa publicada.",
  ],
  otherExclusions: [],
};

export const cataratasPlanTerms: PlanTerms = {
  currency: "ARS",
  perPerson: true,
  taxesIncluded: true,
  occupancyBasis: "Precio por persona en base doble/triple.",
  adminFeeNote: "No incluye 3,5% por gastos administrativos y de reserva.",
  childPolicy: [
    "De 0 a 3 años: sin cargo (sin servicios) acompañado por 2 adultos; paga $15.000 netos por asistencia médica.",
    "De 4 a 11 años: tarifa menor aplica solo para un menor acompañado por 2 adultos.",
  ],
  otherExclusions: ["Entradas y guías de excursiones no incluidos."],
};

export type TravelPlan = {
  id: string;
  destinationSlug: string;
  title: string;
  tagline?: string;
  departures: PlanDeparture[];
  /** Temporada abierta (ej. Canasvieiras nov–abr) en lugar de fechas fijas. */
  season?: PlanSeason;
  nights: number;
  days?: number;
  transport: string;
  hotel?: string;
  accommodationTiers?: AccommodationTier[];
  mealPlan: string;
  priceFrom: number;
  currency: PlanCurrency;
  /** Flyer principal del plan (card / detalle). */
  image: string;
  /** Otros PNG del mismo plan (marketing, duplicados). */
  sourceImages: string[];
  includes: string[];
  excursions: string[];
  optionalExtras?: string[];
  paymentNotes?: string[];
  notes?: string;
  terms: PlanTerms;
  /** ISO date de última verificación contra el flyer. */
  extractedAt: string;
};
