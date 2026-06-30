# Ausland Aventuras — Web

Sitio de la agencia de viajes **Ausland Aventuras** (Córdoba, Argentina). WhatsApp-first: catálogo de destinos, detalle por viaje y consultas directas.

## Estructura del repo

```txt
app/
  page.tsx                    # Home (landing)
  destinos/[slug]/page.tsx    # Detalle por destino (SSG)
  layout.tsx, sitemap.ts, robots.ts
components/                   # UI (hero, cards, explorador, detalle…)
hooks/                        # Filtros de destinos (URL + estado)
lib/                          # site, format, filters, plan-display
src/data/
  destinations.ts             # Catálogo (19 destinos)
  travel-plans.ts             # Planes extraídos de flyers e info básica
  contact.ts                  # WhatsApp, email, Instagram
public/
  brand/                      # Logos
  categorias/                 # Imágenes por tipo de viaje
  destinos/                   # Flyers activos (slug.png + planes/)
  marketing/                  # Variantes históricas (referenciadas en datos)
  hero/                       # Foto principal del home
docs/                         # Brief, stack, assets, textos fuente
  contenido/                  # Info de destinos y borradores legales
  pendientes/                 # Flyers sin destino en la web aún
```

## Cómo arrancar

1. Leer `docs/brief-ausland.md` y `docs/stack.md`.
2. Revisar assets en `docs/assets.md` y `docs/fotos-y-contenido.md`.
3. Fuente de datos de negocio: `docs/contenido/informacion-destinos.md` → `src/data/travel-plans.ts`.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · datos en TS · deploy Vercel.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción (genera páginas `/destinos/*`) |
| `npm run lint` | ESLint |
| `npm run start` | Servidor de producción |

## Contacto (web)

Ver `docs/contacto.md` y `src/data/contact.ts`.

## Reporte de mejoras

Ver `docs/REPORTE-MEJORAS.md` para el detalle de cambios recientes.
