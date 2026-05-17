# Stack técnico

## Stack elegido

- Next.js App Router.
- React.
- TypeScript.
- Tailwind CSS.
- shadcn/ui solo si aporta valor.
- Datos mockeados en archivos TypeScript.
- Sin backend en primera versión.
- Deploy en Vercel.

## Objetivo de la primera versión

Crear una landing visualmente fuerte y responsive para Ausland Aventuras.

No construir todavía:

- Panel de administración.
- Base de datos.
- Login.
- Pagos.
- Reservas reales.
- Backend.

## Estructura sugerida

```txt
app/
  page.tsx
  layout.tsx
components/
  hero.tsx
  search-trips.tsx
  categories.tsx
  destination-card.tsx
  featured-trips.tsx
  why-us.tsx
  traveler-experiences.tsx
  footer.tsx
src/
  data/
    destinations.ts
public/
  brand/
  destinos/
docs/
```

## Buenas prácticas

- Mobile-first.
- Componentes reutilizables.
- Datos separados de la UI.
- Accesibilidad básica.
- Contraste correcto.
- Botones claros.
- Código limpio y escalable.
- No hardcodear todo dentro de `page.tsx`.
