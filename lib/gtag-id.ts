/** ID de medición GA4 (público en el HTML; configurar en Vercel y `.env.local`). */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

export const isAnalyticsEnabled =
  GA_MEASUREMENT_ID.length > 0 && /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID);
