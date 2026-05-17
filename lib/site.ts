/** Configuración del sitio para SEO y metadata. */
export const site = {
  name: "Ausland Aventuras",
  tagline: "La aventura de conocer un nuevo destino",
  description:
    "Agencia de viajes desde Córdoba, Argentina. Viajes nacionales, internacionales y salidas regionales. Consultá fechas y disponibilidad por WhatsApp.",
  locale: "es_AR",
  /** Definir en Vercel: NEXT_PUBLIC_SITE_URL=https://tudominio.com */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://auslandaventuras.com",
} as const;
