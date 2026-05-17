# Fotos y contenido — estrategia realista

Hoy tenés **flyers verticales** (1080×1920) pensados para Instagram/stories, no fotos horizontales de stock. Eso alcanza para arrancar la web; el resto se puede sumar con nuevos diseños cuando los hagas.

## Lo que ya tenés (y dónde está)

| Destino | Archivo | Precio desde | Notas |
|---------|---------|--------------|--------|
| Puerto Madryn | `public/destinos/puerto-madryn.png` | $449.000 | Flyer completo |
| Salta | `public/destinos/salta.png` | $359.000 | |
| Cataratas | `public/destinos/cataratas.png` | $379.000 | Card principal |
| Cataratas (más fechas) | `public/destinos/planes/cataratas-*.png` | $439k–$569k | Variantes en `travel-plans.ts` |
| Brasil Canasvieiras | `public/destinos/brasil-canasvieiras.png` | $560.000 | |

Datos detallados por plan: `src/data/travel-plans.ts` (fechas, noches, hotel, inclusiones, excursiones, tiers de alojamiento, letra chica).

| Archivo | Rol |
|---------|-----|
| `src/data/plan-types.ts` | Esquema TypeScript (`TravelPlan`, salidas, temporadas, condiciones) |
| `src/data/travel-plans.ts` | 6 planes extraídos de flyers |
| `src/data/flyer-catalog.ts` | Qué PNG corresponde a cada `planId` |
| `src/data/index.ts` | Re-export y helpers (`minPriceForDestination`, etc.) |

Destinos **sin** flyer no tienen entrada en `travel-plans.ts` hasta que subas el diseño.

## Destinos sin flyer todavía

Termas, Mendoza, Buenos Aires, Brasil Torres, Caribe, Cura Brochero, Salinas Grandes, Villa General Belgrano, Mar Chiquita.

En la web usan **logo de marca** como imagen temporal (`hasPhoto: false` en `destinations.ts`). La UI puede mostrar fondo celeste/turquesa + logo + nombre del destino hasta que subas un diseño.

## Cómo usar los flyers en la web

- **Cards del catálogo:** `object-fit: cover` + recorte del centro superior (suele verse bien la foto del destino).
- **Hero de home:** mejor con una foto del flyer que tenga buen paisaje (Cataratas, Canasvieiras o Puerto Madryn), no el flyer entero con mucho texto.
- **Página de detalle:** se puede mostrar el flyer completo o una versión recortada + datos del plan.

No hace falta tener 13 fotos distintas el día 1.

## Si vas a hacer más diseños vos

Prioridad sugerida (más consultas / más visibles en el brief):

1. **Salinas Grandes** y **Mar Chiquita** (regionales, Córdoba).
2. **Mendoza** y **Termas** (nacionales populares).
3. **Brasil Torres** y **Caribe** (internacionales).
4. **Buenos Aires** (ciudad).

Podés reutilizar el **mismo template** que ya usás (título, fechas, íconos, caja “incluye”, precio, WhatsApp). Exportá en PNG y guardá como:

`public/destinos/{slug}.png`

Luego en `destinations.ts`: `image: "/destinos/{slug}.png"`, `hasPhoto: true`, y el `priceFrom` si aplica.

## Alternativas sin diseñar todo ya

- **Un solo fondo genérico “viaje”** + logo para destinos sin flyer (más uniforme que repetir el logo chico).
- **Fotos libres** (Unsplash/Pexels) solo para rellenar cards — menos fiel a tu marca, pero rápido.
- **Consultar por WhatsApp** en destinos sin precio: CTA claro sin inventar números.

## Resumen

| Enfoque | Esfuerzo | Resultado |
|---------|----------|-----------|
| Usar flyers actuales | Ya hecho | Web creíble con 4 destinos fuertes |
| Nuevos flyers (tu estilo) | Medio | Coherencia de marca en todos los planes |
| Fotos stock | Bajo | Relleno visual, menos “Ausland” |

Recomendación: **lanzar con los 4 flyers** + placeholders de marca en el resto, e ir sumando diseños cuando tengas fechas/precios confirmados.
