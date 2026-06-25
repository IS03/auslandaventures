import type { DestinationCategory } from "./destinations";
import { categorySearchParam } from "./destinations";

export type CategoryPageSlug = (typeof categorySearchParam)[DestinationCategory];

export const categoryPageSlugs = Object.values(categorySearchParam) as CategoryPageSlug[];

export type CategoryPageContent = {
  category: DestinationCategory;
  slug: CategoryPageSlug;
  title: string;
  metaDescription: string;
  heading: string;
  intro: string;
};

export const categoryPages: CategoryPageContent[] = [
  {
    category: "Nacionales",
    slug: "nacionales",
    title: "Viajes nacionales desde Córdoba",
    metaDescription:
      "Viajes nacionales desde Córdoba: Salta, Puerto Madryn, Cataratas, Mendoza y más. Fechas, precios e inclusiones. Consultá con Ausland Aventuras por WhatsApp.",
    heading: "Viajes nacionales desde Córdoba",
    intro:
      "Salidas en bus o aéreo desde Córdoba a los destinos más elegidos de Argentina. Encontrá fechas, precios orientativos e inclusiones de cada viaje y consultá disponibilidad directo con nuestro equipo.",
  },
  {
    category: "Internacionales",
    slug: "internacionales",
    title: "Viajes internacionales desde Córdoba",
    metaDescription:
      "Viajes internacionales desde Córdoba: Brasil, Caribe, México y más. Paquetes con fechas y tarifas publicadas. Reservá tu consulta con Ausland Aventuras.",
    heading: "Viajes internacionales desde Córdoba",
    intro:
      "Playas, ciudades y escapadas al exterior con salida desde Córdoba. Compará destinos, duración y precios desde ARS o USD y escribinos por WhatsApp para confirmar fechas y cupos.",
  },
  {
    category: "Regionales / Full Day",
    slug: "regionales",
    title: "Full day y viajes regionales desde Córdoba",
    metaDescription:
      "Salidas regionales y full day desde Córdoba: paisajes serranos, costa y experiencias de un día. Consultá fechas y disponibilidad con Ausland Aventuras.",
    heading: "Full day y regionales desde Córdoba",
    intro:
      "Escapadas cortas y salidas de un día para descubrir Córdoba y alrededores sin alejarte demasiado. Ideal para viajar en grupo, conocer nuevos rincones y consultar por WhatsApp.",
  },
];

export function categoryPageBySlug(slug: string): CategoryPageContent | undefined {
  return categoryPages.find((p) => p.slug === slug);
}
