/** Fuente única de contacto y WhatsApp para toda la web. */

export const contact = {
  location: "Córdoba, Argentina",
  email: "contacto@auslandaventuras.com",
  instagram: {
    handle: "auslandaventuras",
    url: "https://instagram.com/auslandaventuras",
  },
  whatsapp: {
    primary: {
      display: "+54 9 351 366-2440",
      e164: "5493513662440",
    },
    secondary: {
      display: "+54 9 3547 31-9437",
      e164: "5493547319437",
    },
  },
} as const;

export const defaultWhatsappMessage =
  "Hola, quiero consultar por un viaje con Ausland Aventuras. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.";

/** Mensaje para viajeros que quieren compartir su experiencia (sección Comunidad). */
export const travelerStoryWhatsappMessage =
  "Hola, viajé con Ausland Aventuras y me gustaría compartir mi experiencia. Mi viaje fue a [DESTINO] y [CONTÁ TU EXPERIENCIA EN POCAS LÍNEAS].";

/** Plantilla para mensajes por destino (usada en destinations.ts). */
export function buildDestinationWhatsappMessage(destinationName: string): string {
  return `Hola, quiero consultar por el viaje a ${destinationName}. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.`;
}

export function whatsappUrl(message: string, useSecondary = false): string {
  const number = useSecondary
    ? contact.whatsapp.secondary.e164
    : contact.whatsapp.primary.e164;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
