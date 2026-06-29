"use client";

import { sendGAEvent } from "@next/third-parties/google";

export type WhatsAppClickLocation =
  | "header"
  | "fab"
  | "footer"
  | "card"
  | "detail"
  | "nosotros";

/** Evento de conversión: clic en enlace o botón de WhatsApp. */
export function trackWhatsAppClick(
  location: WhatsAppClickLocation,
  destination?: string,
) {
  const params = {
    location,
    transport_type: "beacon",
    ...(destination ? { destination } : {}),
  };

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", params);
    return;
  }

  sendGAEvent("event", "whatsapp_click", params);
}
