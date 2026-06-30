# Fotos y contenido — estrategia actualizada

Flyers verticales (1080×1920) para Instagram/stories + **información básica** en `docs/contenido/informacion-destinos.md` para destinos sin flyer diseñado.

## Flyers en `public/destinos/`

| Destino | Archivo | Notas |
|---------|---------|--------|
| Puerto Madryn | `puerto-madryn.png` | Plan completo + variantes |
| Salta | `salta.png` | |
| Cataratas | `cataratas.png` + `planes/cataratas-*.png` | Varias fechas |
| Brasil Canasvieiras | `brasil-canasvieiras.png` | |
| Termas de Río Hondo | `termas-rio-hondo.png` | Info básica (sin precio publicado) |
| Mendoza | `mendoza.png` | Info básica |
| Buenos Aires | `buenos-aires.png` | Info básica |

## Imágenes por categoría (`public/categorias/`)

Usadas en el mosaic de la home, cards sin flyer y hero de páginas de detalle sin PNG propio:

| Archivo | Categoría |
|---------|-----------|
| `nacionales.jpeg` | Nacionales |
| `internacionales.jpg` | Internacionales |
| `regionales.webp` | Regionales / Full Day |

## Datos en código

| Archivo | Rol |
|---------|-----|
| `src/data/destinations.ts` | 19 destinos (catálogo + flags `hasPhoto`, `hasTravelPlan`) |
| `src/data/travel-plans.ts` | ~22 planes (flyers + info básica internacionales y nacionales) |
| `src/data/plan-types.ts` | Tipos, condiciones ARS/USD |
| `src/data/flyer-catalog.ts` | Inventario de PNG |

Los precios en cards se **derivan de `travel-plans.ts`** cuando hay plan publicado.

## Destinos sin flyer todavía

Brasil Torres, regionales (Cura Brochero, Salinas Grandes, Villa General Belgrano, Mar Chiquita) e internacionales sin diseño propio usan imagen de categoría + logo.

Internacionales con **plan en texto** (sin flyer): Cancún, Playa del Carmen, Punta Cana, Río, Aruba, Maceió/Maragogi, Bayahibe.

## Prioridad para nuevos diseños

1. **Salinas Grandes** y **Mar Chiquita** (regionales, Córdoba).
2. **Brasil Torres**.
3. **Cancún / Punta Cana** (destacados con plan pero sin flyer).
4. Flyers para internacionales con tiers de hotel (Aruba, Maceió).

Exportar como `public/destinos/{slug}.png` y marcar `hasPhoto: true` en `destinations.ts`.

## Uso en la web

- **Home / cards:** recorte del flyer o imagen de categoría.
- **Detalle `/destinos/[slug]`:** hero con flyer si existe; botón «Ver flyer» abre lightbox.
- **Destacados:** destinos `featured` con flyer **o** plan publicado.
