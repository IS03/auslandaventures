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
  sendGAEvent("event", "whatsapp_click", {
    location,
    ...(destination ? { destination } : {}),
  });
}
