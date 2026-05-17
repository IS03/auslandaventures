export type DestinationCategory = "Nacionales" | "Internacionales" | "Regionales / Full Day";

export type Destination = {
  slug: string;
  title: string;
  category: DestinationCategory;
  type: string;
  description: string;
  priceFrom: number | null;
  image: string;
  featured: boolean;
  whatsappMessage: string;
};

export const destinations: Destination[] = [
  {
    slug: "puerto-madryn",
    title: "Puerto Madryn",
    category: "Nacionales",
    type: "Bus / Aéreo",
    description: "Naturaleza, fauna marina y paisajes únicos para vivir una experiencia diferente en la Patagonia.",
    priceFrom: null,
    image: "/destinos/puerto-madryn.jpg",
    featured: true,
    whatsappMessage: "Hola, quiero consultar por el viaje a Puerto Madryn. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "salta",
    title: "Salta",
    category: "Nacionales",
    type: "Bus / Aéreo",
    description: "Paisajes del norte argentino, cultura, gastronomía y aventura en un destino inolvidable.",
    priceFrom: null,
    image: "/destinos/salta.jpg",
    featured: true,
    whatsappMessage: "Hola, quiero consultar por el viaje a Salta. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "cataratas",
    title: "Cataratas",
    category: "Nacionales",
    type: "Bus / Aéreo",
    description: "Una maravilla natural para conectar con la selva, el agua y una experiencia única.",
    priceFrom: null,
    image: "/destinos/cataratas.jpg",
    featured: true,
    whatsappMessage: "Hola, quiero consultar por el viaje a Cataratas. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "termas-rio-hondo",
    title: "Termas de Río Hondo",
    category: "Nacionales",
    type: "Bus",
    description: "Relax, termas y descanso para cortar la rutina y disfrutar unos días diferentes.",
    priceFrom: null,
    image: "/destinos/termas-rio-hondo.jpg",
    featured: false,
    whatsappMessage: "Hola, quiero consultar por el viaje a Termas de Río Hondo. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "mendoza",
    title: "Mendoza",
    category: "Nacionales",
    type: "Bus / Aéreo",
    description: "Montañas, bodegas, paisajes y experiencias para disfrutar una escapada completa.",
    priceFrom: null,
    image: "/destinos/mendoza.jpg",
    featured: false,
    whatsappMessage: "Hola, quiero consultar por el viaje a Mendoza. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "buenos-aires",
    title: "Buenos Aires",
    category: "Nacionales",
    type: "Bus / Aéreo",
    description: "Ciudad, cultura, espectáculos, compras y paseos para vivir una salida distinta.",
    priceFrom: null,
    image: "/destinos/buenos-aires.jpg",
    featured: false,
    whatsappMessage: "Hola, quiero consultar por el viaje a Buenos Aires. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "brasil-canasvieiras",
    title: "Brasil Canasvieiras",
    category: "Internacionales",
    type: "Bus",
    description: "Playa, verano y descanso en uno de los clásicos más elegidos del sur de Brasil.",
    priceFrom: null,
    image: "/destinos/brasil-canasvieiras.jpg",
    featured: true,
    whatsappMessage: "Hola, quiero consultar por el viaje a Brasil Canasvieiras. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "brasil-torres",
    title: "Brasil Torres",
    category: "Internacionales",
    type: "Bus",
    description: "Playas, paisajes costeros y una experiencia ideal para disfrutar Brasil en grupo.",
    priceFrom: null,
    image: "/destinos/brasil-torres.jpg",
    featured: false,
    whatsappMessage: "Hola, quiero consultar por el viaje a Brasil Torres. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "caribe",
    title: "Caribe",
    category: "Internacionales",
    type: "Aéreo",
    description: "Playas paradisíacas, aguas turquesas y una experiencia soñada para desconectar.",
    priceFrom: null,
    image: "/destinos/caribe.jpg",
    featured: true,
    whatsappMessage: "Hola, quiero consultar por opciones de viaje al Caribe. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "cura-brochero",
    title: "Cura Brochero",
    category: "Regionales / Full Day",
    type: "Full Day",
    description: "Una salida regional para conocer historia, paisajes serranos y rincones de Córdoba.",
    priceFrom: null,
    image: "/destinos/cura-brochero.jpg",
    featured: false,
    whatsappMessage: "Hola, quiero consultar por la salida a Cura Brochero. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "salinas-grandes",
    title: "Salinas Grandes",
    category: "Regionales / Full Day",
    type: "Full Day",
    description: "Una experiencia distinta entre paisajes blancos, fotos increíbles y aventura regional.",
    priceFrom: null,
    image: "/destinos/salinas-grandes.jpg",
    featured: true,
    whatsappMessage: "Hola, quiero consultar por la salida a Salinas Grandes. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "villa-general-belgrano",
    title: "Villa General Belgrano",
    category: "Regionales / Full Day",
    type: "Full Day",
    description: "Un clásico serrano con encanto, gastronomía, paisajes y paseos para disfrutar en el día.",
    priceFrom: null,
    image: "/destinos/villa-general-belgrano.jpg",
    featured: false,
    whatsappMessage: "Hola, quiero consultar por la salida a Villa General Belgrano. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
  {
    slug: "mar-chiquita",
    title: "Mar Chiquita",
    category: "Regionales / Full Day",
    type: "Full Day",
    description: "Naturaleza, costa cordobesa y una escapada diferente para descubrir paisajes únicos.",
    priceFrom: null,
    image: "/destinos/mar-chiquita.jpg",
    featured: false,
    whatsappMessage: "Hola, quiero consultar por la salida a Mar Chiquita. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.",
  },
];

export const destinationCategories: DestinationCategory[] = [
  "Nacionales",
  "Internacionales",
  "Regionales / Full Day",
];

export const featuredDestinations = destinations.filter((destination) => destination.featured);
