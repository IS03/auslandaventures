# Inventario de assets

## `public/brand/` — Logos para la web

| Archivo | Uso sugerido |
|---------|----------------|
| `logo-horizontal.png` | Header, footer |
| `logo-cuadrado.png` | Favicon, redes, avatar |
| `logo-blanco.png` | Sobre fotos oscuras / hero |
| `logo-con-fondo.png` | Uso general (peso liviano) |
| `logo-con-fondo-hd.png` | Impresión o pantallas retina |
| `logo-tipografico-color.png` | Marca sin isotipo completo |
| `logo-tipografico-blanco.png` | Sobre fondos de color |

## `public/marketing/` — Piezas verticales 1080×1920 (redes)

| Archivo | Notas |
|---------|--------|
| `promo-01-puerto-madryn.png` | Flyer Puerto Madryn (antes `1.png`) |
| `promo-03.png` | Flyer destino (identificar y renombrar si hace falta) |
| `promo-04.png` | Flyer destino (identificar y renombrar si hace falta) |
| `explora-sur-argentino*.png` | Campaña “Explora el Sur Argentino” |

No usar estos PNG verticales como hero de la landing sin recortar/optimizar.

## `public/destinos/` — Fotos para cards y hero

Pendiente: subir fotos horizontales por destino (`.jpg` o `.webp`).

Rutas esperadas por `src/data/destinations.ts`:

- `puerto-madryn.jpg`
- `salta.jpg`
- `cataratas.jpg`
- … (ver slugs en el archivo de datos)

Mientras no existan, la UI puede usar un placeholder o `promo-01-puerto-madryn.png` solo para desarrollo.
