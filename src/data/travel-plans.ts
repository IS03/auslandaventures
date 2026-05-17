/**
 * Planes con flyer propio (datos extraídos de tus diseños).
 * Variantes del mismo destino = distintas fechas / precios / noches.
 */
export type TravelPlan = {
  id: string;
  destinationSlug: string;
  title: string;
  departures: string[];
  nights: number;
  days?: number;
  transport: string;
  hotel?: string;
  mealPlan: string;
  priceFrom: number;
  currency: "ARS";
  image: string;
  includes: string[];
  excursions: string[];
  notes?: string;
};

export const travelPlans: TravelPlan[] = [
  {
    id: "puerto-madryn-2025",
    destinationSlug: "puerto-madryn",
    title: "Puerto Madryn",
    departures: ["13 ago", "9 sep", "13 sep", "8 oct"],
    nights: 3,
    transport: "Bus Mix",
    mealPlan: "Desayuno",
    priceFrom: 449_000,
    currency: "ARS",
    image: "/destinos/puerto-madryn.png",
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
    notes: "Opciones Hostal Rayentray desde $449.000 · Grand Hotel desde $599.000. Ingresos a parques no incluidos.",
  },
  {
    id: "salta-mayo-junio",
    destinationSlug: "salta",
    title: "Conocé Salta la Linda",
    departures: ["21 may", "11 jun"],
    nights: 3,
    transport: "Bus Mix",
    mealPlan: "Desayuno",
    priceFrom: 359_000,
    currency: "ARS",
    image: "/destinos/salta.png",
    includes: [
      "Traslados en Bus Mix",
      "3 noches de alojamiento",
      "Régimen de desayuno",
      "Coordinador permanente",
      "Asistencia médica",
    ],
    excursions: ["City Tour", "Quebrada de Humahuaca", "Cafayate", "Tafí del Valle"],
    notes: "Ingresos a parques y/o reservas no incluidos.",
  },
  {
    id: "cataratas-mayo-junio",
    destinationSlug: "cataratas",
    title: "Cataratas del Iguazú",
    departures: ["21 may", "13 jun"],
    nights: 3,
    days: 5,
    transport: "Bus Mix",
    hotel: "Hotel Sol Cataratas",
    mealPlan: "Media pensión",
    priceFrom: 379_000,
    currency: "ARS",
    image: "/destinos/cataratas.png",
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
    notes: "Entradas y guías no incluidos.",
  },
  {
    id: "cataratas-julio",
    destinationSlug: "cataratas",
    title: "Cataratas del Iguazú",
    departures: ["4 jul", "11 jul"],
    nights: 4,
    days: 6,
    transport: "Bus Mix",
    hotel: "Hotel Sol Cataratas",
    mealPlan: "Media pensión",
    priceFrom: 569_000,
    currency: "ARS",
    image: "/destinos/planes/cataratas-julio.png",
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
    notes: "Entradas y guías no incluidos.",
  },
  {
    id: "cataratas-agosto-sep",
    destinationSlug: "cataratas",
    title: "Cataratas del Iguazú",
    departures: ["15 ago", "13 sep"],
    nights: 3,
    days: 5,
    transport: "Bus Mix",
    hotel: "Hotel Sol Cataratas",
    mealPlan: "Media pensión",
    priceFrom: 439_000,
    currency: "ARS",
    image: "/destinos/planes/cataratas-agosto.png",
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
    notes: "Entradas y guías no incluidos.",
  },
  {
    id: "brasil-canasvieiras",
    destinationSlug: "brasil-canasvieiras",
    title: "Canasvieiras — Lo mejor pasa en Brasil",
    departures: ["Noviembre a abril (temporada)"],
    nights: 7,
    transport: "Bus semi cama ida y vuelta + servicio a bordo",
    hotel: "Residencial Amigos / Dom Luis",
    mealPlan: "Apartamento equipado (opcionales: MP, desayuno o cena)",
    priceFrom: 560_000,
    currency: "ARS",
    image: "/destinos/brasil-canasvieiras.png",
    includes: [
      "7 noches a 400 m del mar",
      "Coordinación en ruta",
      "Asistencia médica",
      "Bonus: excursión de regalo + cena de bienvenida",
    ],
    excursions: ["Excursiones en destino — consultar cuotas"],
    notes: "Opcionales: butaca cama, butacas panorámicas, planes de comidas.",
  },
];

export function plansByDestination(slug: string): TravelPlan[] {
  return travelPlans.filter((p) => p.destinationSlug === slug);
}
