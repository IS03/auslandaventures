# Inventario de assets

## `public/brand/` — Logos

| Archivo | Uso sugerido |
|---------|----------------|
| `logo-horizontal.png` | Header, footer, **fallback** destinos sin foto |
| `logo-cuadrado.png` | Favicon, redes |
| `logo-blanco.png` | Sobre fotos oscuras / hero |
| `logo-con-fondo.png` | Uso general liviano |
| `logo-con-fondo-hd.png` | Retina / impresión |
| `logo-tipografico-color.png` | Marca sin isotipo |
| `logo-tipografico-blanco.png` | Sobre fondos de color |

## `public/categorias/` — Imágenes por tipo de viaje

| Archivo | Uso |
|---------|-----|
| `nacionales.jpeg` | Mosaic, placeholder nacionales |
| `internacionales.jpg` | Mosaic, placeholder internacionales |
| `regionales.webp` | Mosaic, placeholder regionales |

## `public/destinos/` — Flyers usados en la web

| Archivo | Destino | Formato |
|---------|---------|---------|
| `puerto-madryn.png` | Puerto Madryn | 1080×1920 vertical |
| `salta.png` | Salta | 1080×1920 |
| `cataratas.png` | Cataratas (card principal) | 1080×1920 |
| `brasil-canasvieiras.png` | Canasvieiras | 1080×1920 |
| `termas-rio-hondo.png` | Termas | 1080×1920 |
| `mendoza.png` | Mendoza | 1080×1920 |
| `buenos-aires.png` | Buenos Aires | 1080×1920 |
| `planes/cataratas-julio.png` | Variante julio | 1080×1920 |
| `planes/cataratas-agosto.png` | Variante ago/sep | 1080×1920 |

Destinos sin archivo aquí → ver `destinationImageFallback` en `src/data/destinations.ts`.

## `public/marketing/` — Copia de respaldo (mismos flyers)

Archivos originales renombrados. La web lee desde `destinos/`.

## Estrategia de contenido

Ver `docs/fotos-y-contenido.md`.
