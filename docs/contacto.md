# Datos de contacto

Fuente técnica compartida: `src/data/contact.ts`.

## WhatsApp

| Uso | Número | Link |
|-----|--------|------|
| Principal | +54 9 351 366-2440 | https://wa.me/5493513662440 |
| Secundario | +54 9 3547 31-9437 | https://wa.me/5493547319437 |

En la web usar el **principal** para CTAs globales. El secundario queda disponible si se necesita rotación o líneas por destino.

## Instagram

https://instagram.com/auslandaventuras

## Email

contacto@auslandaventuras.com

## Ubicación

Córdoba, Argentina.

## Mensaje base de WhatsApp

Hola, quiero consultar por el viaje a [DESTINO]. Somos [CANTIDAD] personas y queremos saber fechas, precio y disponibilidad.

## Mensaje por destino

Cada card de destino debe abrir WhatsApp con un mensaje personalizado (ver `whatsappMessage` en `src/data/destinations.ts`).

## Notas

- El botón principal de la web debe llevar a WhatsApp (número principal).
- Cada destino debe tener su propio mensaje automático.
