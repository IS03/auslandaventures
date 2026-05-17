/** Fuente única de contacto para la web y links de WhatsApp. */
export const contact = {
  location: "Córdoba, Argentina",
  email: "contacto@auslandaventuras.com",
  instagram: {
    handle: "auslandaventuras",
    url: "https://instagram.com/auslandaventuras",
  },
  whatsapp: {
    /** Número principal (flyers / Puerto Madryn). */
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

export function whatsappUrl(message: string, useSecondary = false): string {
  const number = useSecondary
    ? contact.whatsapp.secondary.e164
    : contact.whatsapp.primary.e164;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hola, quiero consultar por un viaje con Ausland Aventuras. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.";
