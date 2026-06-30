"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { isAnalyticsEnabled } from "@/lib/gtag-id";

export type WhatsAppClickLocation =
  | "header"
  | "fab"
  | "footer"
  | "card"
  | "detail"
  | "nosotros"
  | "experiencias";

/** Evento de conversión: clic en enlace o botón de WhatsApp. */
export function trackWhatsAppClick(
  location: WhatsAppClickLocation,
  destination?: string,
) {
  if (!isAnalyticsEnabled) return;

  const params: Record<string, string> = { location };
  if (destination) params.destination = destination;

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", params);
    return;
  }

  sendGAEvent("event", "whatsapp_click", params);
}
