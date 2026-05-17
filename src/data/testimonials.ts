export type Testimonial = {
  id: string;
  name: string;
  destination: string;
  quote: string;
  rating: number;
};

/** Referencia ilustrativa — reemplazar con testimonios reales cuando estén disponibles. */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Viajera",
    destination: "Patagonia",
    quote: "Muy buena coordinación y un trato cercano durante todo el viaje.",
    rating: 5,
  },
  {
    id: "2",
    name: "Pareja",
    destination: "Norte argentino",
    quote: "Salimos desde Córdoba con todo organizado. La consulta por WhatsApp fue simple y clara.",
    rating: 5,
  },
  {
    id: "3",
    name: "Familia",
    destination: "Brasil",
    quote: "Nos respondieron las dudas antes de viajar y nos sentimos acompañados en el camino.",
    rating: 5,
  },
];
