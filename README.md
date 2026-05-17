# Ausland Aventuras — Web

Landing y sitio de la agencia de viajes **Ausland Aventuras** (Córdoba, Argentina). WhatsApp-first: mostrar destinos, categorías y generar consultas.

## Estructura del repo

```txt
.cursor/
  rules/project-ausland.md    # Reglas de producto y diseño
  skills/frontend-design/     # Skill de UI (Anthropic)
docs/                         # Brief, stack, prompt, contacto, assets
src/data/                     # destinations.ts, contact.ts
public/
  brand/                      # Logos
  destinos/                   # Fotos de destinos (pendientes)
  marketing/                  # Flyers verticales para redes
```

## Cómo arrancar con Cursor

1. Leer `docs/brief-ausland.md` y `docs/stack.md`.
2. Revisar assets en `docs/assets.md`.
3. Copiar el prompt de `docs/prompt-cursor.md` en el chat de Cursor.
4. Completar fotos en `public/destinos/` cuando estén listas.

## Stack previsto

Next.js (App Router) · TypeScript · Tailwind CSS · datos mock · deploy Vercel.

La app Next.js aún no está generada; este repo tiene documentación, datos mock y assets listos para construirla.

## Contacto (web)

Ver `docs/contacto.md` y `src/data/contact.ts`.
