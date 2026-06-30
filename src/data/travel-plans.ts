import {
  cataratasPlanTerms,
  defaultDomesticPlanTerms,
  domesticExclusionsFromBasicInfo,
  internationalPlanTerms,
  type PlanCurrency,
  type TravelPlan,
} from "./plan-types";

export type { TravelPlan, PlanDeparture, AccommodationTier, PlanTerms } from "./plan-types";

const FALLBACK_IMAGE = "/brand/logo-horizontal.png";

const EXTRACTED_AT = "2026-05-17";
const BASIC_INFO_AT = "2026-06-25";

const butacasPuertoMadryn = [
  "Adicional butaca cama: $60.000 neto",
  "Butacas semi cama panorámica o cafetera: $30.000 neto",
];

const butacasCataratas = [
  "Adicional butaca cama: $50.000 neto",
  "Butacas semi cama panorámica o cafetera: $25.000 neto",
];

const butacasSalta = [
  "Adicional butaca cama: $40.000 neto",
  "Butacas semi cama panorámica o cafetera: $20.000 neto",
];

const butacasBuenosAires = [
  "Adicional butaca cama: $30.000 neto",
  "Butacas semi cama panorámica o cafetera: $20.000 neto (solo base doble, desde 14 años)",
];

const mendozaButaca = ["Adicional butaca cama: $40.000 neto"];

const domesticTermsWithExclusions = {
  ...defaultDomesticPlanTerms,
  otherExclusions: domesticExclusionsFromBasicInfo,
};

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
    optionalExtras: butacasPuertoMadryn,
    terms: {
      ...defaultDomesticPlanTerms,
      otherExclusions: [
        "Ingresos a parques y/o reservas no incluidos.",
        ...domesticExclusionsFromBasicInfo.slice(1),
      ],
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
    optionalExtras: butacasSalta,
    terms: domesticTermsWithExclusions,
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
    optionalExtras: butacasCataratas,
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
    optionalExtras: butacasCataratas,
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
    optionalExtras: butacasCataratas,
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
      "Bus semi cama ida y vuelta + servicio a bordo (snack, gaseosa y golosinas)",
      "7 noches en Residencial Amigos / Dom Luis",
      "Apartamento equipado a 400 m del mar",
      "Coordinación en ruta + asistencia médica",
      "Bonus: excursión de regalo + cena de bienvenida",
      "Conservadora y sombrilla en destino",
    ],
    excursions: ["Excursión de regalo incluida; otras excursiones en destino con costo adicional"],
    optionalExtras: [
      "Coche cama: $130.000",
      "Butacas especiales: $40.000",
      "7 desayunos buffet: $80.000",
      "6 cenas buffet: $120.000",
    ],
    paymentNotes: [
      "De 6 a 10 cuotas sin interés en efectivo o transferencia según fecha de salida",
      "Último pago: 20 días antes de la salida",
      "Tarifas válidas hasta 31/08 o hasta modificación de valores",
    ],
    notes: "Menores sobre 2 adultos pagantes: 0–3 años solo asistencia $45.000; 4–5 años butaca + asistencia $390.000; 6–8 años 5% OFF.",
    terms: {
      currency: "ARS",
      perPerson: true,
      taxesIncluded: true,
      adminFeeNote: "Consultar condiciones de reserva y gastos administrativos.",
      childPolicy: [
        "0 a 3 años (sobre 2 adultos pagantes): solo asistencia médica $45.000",
        "4 a 5 años: butaca + asistencia $390.000",
        "6 a 8 años: 5% OFF",
      ],
      otherExclusions: ["Excursiones en destino no incluidas salvo la de regalo indicada."],
    },
    extractedAt: EXTRACTED_AT,
  },
  // —— Información básica de destinos (sin flyer; consultar fechas/precio) ——
  {
    id: "termas-rio-hondo-basic",
    destinationSlug: "termas-rio-hondo",
    title: "Termas de Río Hondo",
    departures: [{ label: "Consultar salidas desde Córdoba" }],
    nights: 3,
    transport: "Bus Mix — salida desde Córdoba",
    mealPlan: "Pensión completa (incluye bebida)",
    currency: "ARS",
    image: "/destinos/termas-rio-hondo.png",
    sourceImages: ["/destinos/termas-rio-hondo.png"],
    includes: [
      "Bus Mix — salida desde Córdoba",
      "3 noches de alojamiento",
      "Pensión completa (incluye bebida)",
      "Coordinador permanente",
    ],
    excursions: [],
    terms: domesticTermsWithExclusions,
    extractedAt: BASIC_INFO_AT,
  },
  {
    id: "mendoza-basic",
    destinationSlug: "mendoza",
    title: "Mendoza",
    departures: [{ label: "3 o 4 noches según fecha de salida" }],
    nights: 3,
    transport: "Bus Mix",
    hotel: "Hotel Fuente Mayor 3★ Terminal",
    mealPlan: "Desayuno",
    currency: "ARS",
    image: "/destinos/mendoza.png",
    sourceImages: ["/destinos/mendoza.png"],
    includes: [
      "Bus Mix",
      "3 o 4 noches de alojamiento según fecha",
      "Hotel Fuente Mayor 3★ Terminal",
      "Régimen de desayuno",
      "Asistencia al viajero",
      "Coordinador / guía local",
    ],
    excursions: [
      "City Tour",
      "Almuerzo en bodega Baudron",
      "Chocolatería Chocolezza",
    ],
    optionalExtras: mendozaButaca,
    notes: "Duración de 3 o 4 noches según fecha de salida.",
    terms: domesticTermsWithExclusions,
    extractedAt: BASIC_INFO_AT,
  },
  {
    id: "buenos-aires-basic",
    destinationSlug: "buenos-aires",
    title: "Buenos Aires",
    departures: [{ label: "Consultar salidas" }],
    nights: 3,
    transport: "Bus Mix",
    mealPlan: "Desayuno",
    currency: "ARS",
    image: "/destinos/buenos-aires.png",
    sourceImages: ["/destinos/buenos-aires.png"],
    includes: [
      "Bus Mix",
      "3 noches de alojamiento",
      "Régimen de desayuno",
      "Coordinación permanente",
      "Asistencia médica",
    ],
    excursions: ["City Tour"],
    optionalExtras: butacasBuenosAires,
    terms: domesticTermsWithExclusions,
    extractedAt: BASIC_INFO_AT,
  },
  // —— Internacionales (información básica) ——
  {
    id: "mexico-cancun-basic",
    destinationSlug: "mexico-cancun",
    title: "México — Cancún",
    departures: [
      { label: "3 mar – 11 mar", day: 3, month: 3 },
      { label: "16 feb – 24 feb 2027", day: 16, month: 2 },
    ],
    nights: 8,
    transport: "Aéreos desde Córdoba (carry on y mochila) + traslado in/out",
    mealPlan: "All inclusive",
    currency: "USD",
    image: FALLBACK_IMAGE,
    sourceImages: [FALLBACK_IMAGE],
    includes: [
      "Aéreos desde Córdoba con carry on y mochila",
      "Traslado in/out",
      "Asistencia médica",
      "8 noches de alojamiento all inclusive",
      "Hoteles disponibles: All Ritmo Cancun Resort & Water Park, Hotel NYX Cancun All Inclusive, Occidental Tucancun",
    ],
    excursions: [],
    notes: "Consultar tarifa según hotel y fecha.",
    terms: internationalPlanTerms,
    extractedAt: BASIC_INFO_AT,
  },
  {
    id: "mexico-playa-del-carmen-basic",
    destinationSlug: "mexico-playa-del-carmen",
    title: "México — Playa del Carmen",
    departures: [{ label: "3 mar – 11 mar", day: 3, month: 3 }],
    nights: 8,
    transport: "Aéreo desde Córdoba + traslados (consultar detalle)",
    mealPlan: "Consultar régimen según hotel",
    currency: "USD",
    image: FALLBACK_IMAGE,
    sourceImages: [FALLBACK_IMAGE],
    includes: [
      "8 noches — consultar inclusiones según hotel",
      "Hoteles disponibles: Allegro Playacar, The Reef CocoBeach, Grand Palladium Colonial Resort & Spa",
    ],
    excursions: [],
    notes: "Consultar tarifa e inclusiones según hotel.",
    terms: internationalPlanTerms,
    extractedAt: BASIC_INFO_AT,
  },
  {
    id: "punta-cana-enero-02",
    destinationSlug: "punta-cana",
    title: "Punta Cana — Occidental Caribe",
    departures: [{ label: "2 ene – 10 ene", day: 2, month: 1 }],
    nights: 8,
    transport: "Aéreo desde Córdoba + traslados (consultar)",
    hotel: "Occidental Caribe All Inclusive",
    mealPlan: "All inclusive",
    priceFrom: 2050,
    currency: "USD",
    image: FALLBACK_IMAGE,
    sourceImages: [FALLBACK_IMAGE],
    includes: [
      "Aéreos desde Córdoba (consultar equipaje)",
      "Traslado in/out",
      "Asistencia médica",
      "8 noches Occidental Caribe All Inclusive",
    ],
    excursions: [],
    accommodationTiers: [
      { id: "doble", name: "Habitación doble", features: ["Base doble"], priceFrom: 2150 },
      { id: "triple", name: "Habitación triple", features: ["Base triple"], priceFrom: 2100 },
      { id: "cdpl", name: "Habitación cuádruple", features: ["Base cuádruple"], priceFrom: 2050 },
      { id: "single", name: "Habitación single", features: ["Base single"], priceFrom: 2880 },
    ],
    terms: internationalPlanTerms,
    extractedAt: BASIC_INFO_AT,
  },
  {
    id: "punta-cana-enero-06",
    destinationSlug: "punta-cana",
    title: "Punta Cana — Occidental Caribe",
    departures: [{ label: "6 ene – 14 ene", day: 6, month: 1 }],
    nights: 8,
    transport: "Aéreo desde Córdoba + traslados (consultar)",
    hotel: "Occidental Caribe All Inclusive",
    mealPlan: "All inclusive",
    priceFrom: 2050,
    currency: "USD",
    image: FALLBACK_IMAGE,
    sourceImages: [FALLBACK_IMAGE],
    includes: [
      "Aéreos desde Córdoba (consultar equipaje)",
      "Traslado in/out",
      "Asistencia médica",
      "8 noches Occidental Caribe All Inclusive",
    ],
    excursions: [],
    accommodationTiers: [
      { id: "doble", name: "Habitación doble", features: ["Base doble"], priceFrom: 2150 },
      { id: "triple", name: "Habitación triple", features: ["Base triple"], priceFrom: 2100 },
      { id: "cdpl", name: "Habitación cuádruple", features: ["Base cuádruple"], priceFrom: 2050 },
      { id: "single", name: "Habitación single", features: ["Base single"], priceFrom: 2880 },
    ],
    terms: internationalPlanTerms,
    extractedAt: BASIC_INFO_AT,
  },
  {
    id: "brasil-rio-de-janeiro-basic",
    destinationSlug: "brasil-rio-de-janeiro",
    title: "Brasil — Río de Janeiro",
    departures: [
      { label: "21 ene – 29 ene 2027", day: 21, month: 1 },
      { label: "2 mar – 10 mar 2027", day: 2, month: 3 },
    ],
    nights: 8,
    transport: "Consultar transporte",
    mealPlan: "Consultar régimen",
    currency: "USD",
    image: FALLBACK_IMAGE,
    sourceImages: [FALLBACK_IMAGE],
    includes: ["Consultar inclusiones del programa para estas fechas"],
    excursions: [],
    notes: "Fechas publicadas; consultar tarifa, hotel e inclusiones.",
    terms: internationalPlanTerms,
    extractedAt: BASIC_INFO_AT,
  },
  {
    id: "aruba-diciembre",
    destinationSlug: "aruba",
    title: "Aruba",
    departures: [{ label: "9 dic – 17 dic", day: 9, month: 12 }],
    nights: 8,
    transport: "Aéreos desde Córdoba (carry on y mochila) + traslado in/out",
    mealPlan: "Estudios equipados sin pensión (salvo que se aclare)",
    priceFrom: 1390,
    currency: "USD",
    image: FALLBACK_IMAGE,
    sourceImages: [FALLBACK_IMAGE],
    includes: [
      "Aéreos desde Córdoba con carry on y mochila",
      "Traslado in/out",
      "Asistencia médica",
      "8 noches de alojamiento",
    ],
    excursions: [],
    accommodationTiers: [
      { id: "posada-sandra", name: "Posada Sandra Tours", features: ["Estudio equipado"], priceFrom: 1390 },
      { id: "inn-desayuno", name: "Inn con desayuno", features: ["Desayuno"], priceFrom: 1490 },
      { id: "blue-village", name: "Aruba Blue Village", features: ["Estudio equipado"], priceFrom: 1530 },
      {
        id: "caribbean-palm",
        name: "Caribbean Palm Village Resort",
        features: ["Estudio equipado"],
        priceFrom: 1550,
      },
      {
        id: "tryp-wyndham",
        name: "TRYP by Wyndham Aruba Adults Only",
        features: ["Adults only"],
        priceFrom: 1990,
      },
      {
        id: "divi-dutch",
        name: "Divi Dutch Village Beach Resort",
        features: ["Estudio USD 2.050 / all inclusive USD 2.880"],
        priceFrom: 2050,
      },
    ],
    terms: internationalPlanTerms,
    extractedAt: BASIC_INFO_AT,
  },
  {
    id: "aruba-febrero",
    destinationSlug: "aruba",
    title: "Aruba",
    departures: [{ label: "8 feb – 16 feb", day: 8, month: 2 }],
    nights: 8,
    transport: "Aéreos desde Córdoba (carry on y mochila) + traslado in/out",
    mealPlan: "Estudios equipados sin pensión (salvo que se aclare)",
    priceFrom: 1599,
    currency: "USD",
    image: FALLBACK_IMAGE,
    sourceImages: [FALLBACK_IMAGE],
    includes: [
      "Aéreos desde Córdoba con carry on y mochila",
      "Traslado in/out",
      "Asistencia médica",
      "8 noches de alojamiento",
    ],
    excursions: [],
    accommodationTiers: [
      { id: "arubiana", name: "Arubiana Inn", features: ["Estudio equipado"], priceFrom: 1599 },
      { id: "posada-sandra", name: "Posada Sandra Tours", features: ["Estudio equipado"], priceFrom: 1680 },
      { id: "coconut", name: "Coconut Inn con desayuno", features: ["Desayuno"], priceFrom: 1730 },
      { id: "blue-village", name: "Aruba Blue Village", features: ["Estudio equipado"], priceFrom: 1750 },
      { id: "eagle", name: "Eagle Aruba Resort", features: ["Estudio equipado"], priceFrom: 2999 },
    ],
    terms: internationalPlanTerms,
    extractedAt: BASIC_INFO_AT,
  },
  {
    id: "aruba-marzo",
    destinationSlug: "aruba",
    title: "Aruba",
    departures: [{ label: "4 mar – 12 mar", day: 4, month: 3 }],
    nights: 8,
    transport: "Aéreos desde Córdoba (carry on y mochila) + traslado in/out",
    mealPlan: "Estudios equipados sin pensión (salvo que se aclare)",
    priceFrom: 1520,
    currency: "USD",
    image: FALLBACK_IMAGE,
    sourceImages: [FALLBACK_IMAGE],
    includes: [
      "Aéreos desde Córdoba con carry on y mochila",
      "Traslado in/out",
      "Asistencia médica",
      "8 noches de alojamiento",
    ],
    excursions: [],
    accommodationTiers: [
      { id: "arubiana", name: "Arubiana Inn", features: ["Estudio equipado"], priceFrom: 1520 },
      { id: "posada-sandra", name: "Posada Sandra Tours", features: ["Estudio equipado"], priceFrom: 1599 },
      { id: "coconut", name: "Coconut Inn con desayuno", features: ["Desayuno"], priceFrom: 1650 },
      { id: "blue-village", name: "Aruba Blue Village", features: ["Estudio equipado"], priceFrom: 1650 },
      { id: "eagle", name: "Eagle Aruba Resort", features: ["Estudio equipado"], priceFrom: 2999 },
    ],
    terms: internationalPlanTerms,
    extractedAt: BASIC_INFO_AT,
  },
  {
    id: "maceio-enero",
    destinationSlug: "maceio",
    title: "Maceio / Maragogi",
    departures: [{ label: "26 ene – 3 feb", day: 26, month: 1 }],
    nights: 8,
    transport: "Aéreo GOL desde Córdoba vía Río de Janeiro + traslado in/out",
    mealPlan: "Desayuno",
    priceFrom: 1260,
    currency: "USD",
    image: FALLBACK_IMAGE,
    sourceImages: [FALLBACK_IMAGE],
    includes: [
      "Aéreo desde Córdoba con carry on y mochila (GOL vía Río de Janeiro)",
      "Traslado in/out",
      "Asistencia médica",
      "8 noches de alojamiento con desayuno",
    ],
    excursions: [],
    accommodationTiers: [
      { id: "canto-corais", name: "Pousada Canto dos Corais Maragogi", features: ["Maragogi"], priceFrom: 1260 },
      { id: "lagoa-mar", name: "Lagoa Mar Hotel", features: ["Maceió"], priceFrom: 1270 },
      { id: "tartaruga", name: "Pousada Tartaruga / Pousada Tapitanga", features: ["Maragogi"], priceFrom: 1340 },
      { id: "saint-patrick", name: "Saint Patrick Grand Hotel", features: ["Maceió"], priceFrom: 1380 },
      { id: "ponta-mangue", name: "Pousada Ponta de Mangue", features: ["Maragogi"], priceFrom: 1390 },
      { id: "porto-kaete", name: "Porto Kaeté / Amenit Hotel", features: ["Maceió"], priceFrom: 1430 },
      { id: "pajucara", name: "Pajuçara Praia / Intercity Maceió", features: ["Maceió"], priceFrom: 1480 },
      { id: "marinas", name: "Marinas Maceió Hotel", features: ["Maceió"], priceFrom: 1525 },
      { id: "shalom", name: "Pousada Shalom Beach", features: ["Maragogi"], priceFrom: 1540 },
    ],
    terms: internationalPlanTerms,
    extractedAt: BASIC_INFO_AT,
  },
  {
    id: "maceio-febrero",
    destinationSlug: "maceio",
    title: "Maceio / Maragogi",
    departures: [{ label: "11 feb – 19 feb", day: 11, month: 2 }],
    nights: 8,
    transport: "Aéreo GOL desde Córdoba vía Río de Janeiro + traslado in/out",
    mealPlan: "Desayuno",
    priceFrom: 1150,
    currency: "USD",
    image: FALLBACK_IMAGE,
    sourceImages: [FALLBACK_IMAGE],
    includes: [
      "Aéreo desde Córdoba con carry on y mochila (GOL vía Río de Janeiro)",
      "Traslado in/out",
      "Asistencia médica",
      "8 noches de alojamiento con desayuno",
    ],
    excursions: [],
    accommodationTiers: [
      { id: "canto-corais", name: "Pousada Canto dos Corais Maragogi", features: ["Maragogi"], priceFrom: 1150 },
      { id: "lagoa-mar", name: "Lagoa Mar Hotel", features: ["Maceió"], priceFrom: 1185 },
      { id: "tartaruga", name: "Pousada Tartaruga", features: ["Maragogi"], priceFrom: 1260 },
      { id: "porto-kaete", name: "Porto Kaeté / Amenit Hotel", features: ["Maceió"], priceFrom: 1290 },
      { id: "pajucara", name: "Pajuçara Praia", features: ["Maceió"], priceFrom: 1330 },
      { id: "marinas", name: "Marinas Maceió Hotel", features: ["Maceió"], priceFrom: 1350 },
      { id: "tapitanga", name: "Pousada Tapitanga", features: ["Maragogi"], priceFrom: 1390 },
      { id: "olho-dagua", name: "Pousada Olho D'água", features: ["Maragogi"], priceFrom: 1410 },
    ],
    terms: internationalPlanTerms,
    extractedAt: BASIC_INFO_AT,
  },
  {
    id: "bayahibe-febrero",
    destinationSlug: "bayahibe",
    title: "Bayahibe — Punta Cana",
    departures: [{ label: "3 feb – 11 feb", day: 3, month: 2 }],
    nights: 8,
    transport: "Aéreos LATAM vía Lima desde Córdoba (carry on y mochila) + traslado in/out",
    hotel: "Sunscape Dominicus La Romana",
    mealPlan: "All inclusive",
    priceFrom: 2200,
    currency: "USD",
    image: FALLBACK_IMAGE,
    sourceImages: [FALLBACK_IMAGE],
    includes: [
      "Aéreos desde Córdoba con carry on y mochila (LATAM vía Lima)",
      "Traslado in/out",
      "Asistencia médica",
      "8 noches all inclusive en Sunscape Dominicus La Romana",
    ],
    excursions: [],
    paymentNotes: [
      "Precio en dólares con cuotas mensuales hasta 20 días antes de la salida",
      "Se asegura con la seña inicial (primer cuota)",
    ],
    terms: {
      ...internationalPlanTerms,
      adminFeeNote:
        "Hotelería y precio sujetos a confirmación al momento de la reserva. Se asegura con el pago de la primera cuota.",
    },
    extractedAt: BASIC_INFO_AT,
  },
  {
    id: "bayahibe-marzo",
    destinationSlug: "bayahibe",
    title: "Bayahibe — Punta Cana",
    departures: [{ label: "4 mar – 12 mar", day: 4, month: 3 }],
    nights: 8,
    transport: "Aéreos LATAM vía Lima desde Córdoba (carry on y mochila) + traslado in/out",
    hotel: "Sunscape Dominicus La Romana",
    mealPlan: "All inclusive",
    priceFrom: 2170,
    currency: "USD",
    image: FALLBACK_IMAGE,
    sourceImages: [FALLBACK_IMAGE],
    includes: [
      "Aéreos desde Córdoba con carry on y mochila (LATAM vía Lima)",
      "Traslado in/out",
      "Asistencia médica",
      "8 noches all inclusive en Sunscape Dominicus La Romana",
    ],
    excursions: [],
    paymentNotes: [
      "Precio en dólares con cuotas mensuales hasta 20 días antes de la salida",
      "Se asegura con la seña inicial (primer cuota)",
    ],
    terms: {
      ...internationalPlanTerms,
      adminFeeNote:
        "Hotelería y precio sujetos a confirmación al momento de la reserva. Se asegura con el pago de la primera cuota.",
    },
    extractedAt: BASIC_INFO_AT,
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
  const prices = plans
    .flatMap((p) => {
      const planPrice = p.priceFrom;
      const tierPrices = p.accommodationTiers?.map((t) => t.priceFrom) ?? [];
      return [planPrice, ...tierPrices].filter(
        (price): price is number => price != null && price > 0,
      );
    });
  if (prices.length === 0) return null;
  return Math.min(...prices);
}

/** Moneda del menor precio publicado (si hay varias, prioriza la del plan más barato). */
export function currencyForDestination(slug: string): PlanCurrency | null {
  const plans = plansByDestination(slug);
  let best: { price: number; currency: PlanCurrency } | null = null;

  for (const plan of plans) {
    const candidates: { price: number; currency: PlanCurrency }[] = [];
    if (plan.priceFrom != null && plan.priceFrom > 0) {
      candidates.push({ price: plan.priceFrom, currency: plan.currency });
    }
    for (const tier of plan.accommodationTiers ?? []) {
      if (tier.priceFrom > 0) {
        candidates.push({ price: tier.priceFrom, currency: plan.currency });
      }
    }
    for (const c of candidates) {
      if (!best || c.price < best.price) best = c;
    }
  }

  return best?.currency ?? null;
}

/** Texto corto de salidas para cards (ej. "21 may · 11 jun"). */
export function formatDeparturesShort(plan: TravelPlan, max = 4): string {
  const labels = plan.departures.map((d) => d.label);
  if (labels.length <= max) return labels.join(" · ");
  return `${labels.slice(0, max).join(" · ")} +${labels.length - max}`;
}

export type DestinationCardMeta = {
  priceFrom: number | null;
  currency: PlanCurrency | null;
  planLine: string;
};

/** Datos de card derivados de flyers (precio mínimo + salidas/noches). */
export function getDestinationCardMeta(slug: string): DestinationCardMeta | null {
  const plans = plansByDestination(slug);
  if (plans.length === 0) return null;

  const priceFrom = minPriceForDestination(slug);
  const currency = currencyForDestination(slug);
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

  return { priceFrom, currency, planLine };
}
