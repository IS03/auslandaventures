# Reporte de mejoras — Ausland Aventuras Web

**Fecha:** 25 de junio de 2026  
**Alcance:** Pulido post-expansión del catálogo (19 destinos, páginas de detalle, planes internacionales).

---

## Resumen ejecutivo

Se aplicaron **12 mejoras** orientadas a producción: assets organizados, datos unificados, mejor conversión WhatsApp, SEO compartible, lightbox de flyers en detalle y CI automático. El sitio pasa de “catálogo visual” a **producto listo para deploy** con menos deuda técnica.

| Área | Antes | Después |
|------|-------|---------|
| Imágenes categoría | Rutas confusas en raíz de `public/` | `public/categorias/` con nombres claros |
| Precios en catálogo | Duplicados en `destinations` y `travel-plans` | Derivados de `travel-plans` al exportar |
| `hasTravelPlan` | Set manual (riesgo de desync) | Derivado de `travelPlans` automáticamente |
| Destacados | Solo destinos con flyer | Flyer **o** plan publicado (ej. Cancún, Punta Cana) |
| Hero home | Solo “Ver destacados” | **WhatsApp principal** + enlace secundario |
| Filtros categoría | URL → estado (solo lectura) | **Bidireccional** (`?categoria=…` al cambiar tabs) |
| Hero detalle | Siempre imagen de categoría | **Flyer del destino** si `hasPhoto` |
| Flyers en UI | Lightbox sin uso tras rediseño de cards | Botón **«Ver flyer»** en página de detalle |
| Accesibilidad filtros | Patrón `tablist` incompleto | `role="group"` + `aria-pressed` |
| CSS | `z-index` duplicado | Corregido |
| Documentación | Desactualizada (Caribe, 6 planes) | README + `docs/` alineados |
| CI | Ninguno | GitHub Actions: `lint` + `build` |

---

## 1. Assets — imágenes de categoría

**Problema:** Las imágenes del mosaic (`postcss.config.jpeg`, etc.) tenían nombres accidentales aunque existían en disco.

**Solución:**
- Copiadas a `public/categorias/nacionales.jpeg`, `internacionales.jpg`, `regionales.webp`
- Actualizado `categoryShowcaseBlocks` y `categoryPlaceholderImage` en `src/data/destinations.ts`

**Impacto:** Mosaic, cards sin flyer y heroes de detalle usan rutas mantenibles.

---

## 2. Datos — precios y planes sincronizados

**Archivo:** `src/data/destinations.ts`

- Eliminado el set manual `SLUGS_WITH_TRAVEL_PLANS` (14 slugs hardcodeados).
- Ahora: `new Set(travelPlans.map(p => p.destinationSlug))`.
- Al exportar `destinations`, cada destino enriquece:
  - `priceFrom` ← `minPriceForDestination(slug)` con fallback al valor del catálogo
  - `priceCurrency` ← `currencyForDestination(slug)`
  - `hasTravelPlan` ← presencia en planes

**Impacto:** Un solo lugar para actualizar precios (`travel-plans.ts`). Menos errores al agregar destinos.

---

## 3. Destacados ampliados

**Antes:** `featured && hasPhoto` → 4 cards (solo flyers clásicos).

**Ahora:** `featured && (hasPhoto || hasTravelPlan)` → incluye **Cancún** y **Punta Cana** con planes USD publicados.

Subtítulo de sección actualizado para reflejar el criterio.

---

## 4. Conversión — WhatsApp en hero

**Archivo:** `components/hero.tsx`

Botón verde **«Consultar por WhatsApp»** (mensaje genérico) como CTA principal; «Ver destacados» pasa a enlace secundario.

Alineado con el brief WhatsApp-first.

---

## 5. Explorador — filtros en URL

**Archivo:** `hooks/use-destination-filters.ts`

- Al elegir categoría en tabs → `router.replace('/?categoria=nacionales#viajes')`
- Al elegir «Todos» → quita el parámetro
- Al entrar con URL → sincroniza estado

**Impacto:** Enlaces compartibles por WhatsApp/redes con filtro preaplicado.

---

## 6. Páginas de detalle — hero y flyers

**Archivos:** `components/destination-hero.tsx`, `components/destination-detail-view.tsx`

- Hero usa **imagen del destino** cuando `hasPhoto: true` (recorte superior del flyer).
- Si hay PNG en planes → **FlyerLightboxTrigger** («Ver flyer») con variantes.
- Sin flyer → imagen de categoría (comportamiento anterior).

---

## 7. Accesibilidad y CSS

- `CategoryTabs`: de `tablist`/`tab` a `group` + `aria-pressed` (patrón de filtro, no tabs falsos).
- `TripExplorer`: región `#resultados-viajes` para resultados.
- `globals.css`: eliminado `z-index` duplicado en textura de secciones.

---

## 8. CI (GitHub Actions)

**Archivo:** `.github/workflows/ci.yml`

En cada push/PR a `main`/`master`:
1. `npm ci`
2. `npm run lint`
3. `npm run build` (genera 19 páginas estáticas + home)

---

## 9. Documentación

| Archivo | Cambio |
|---------|--------|
| `README.md` | Estructura actual, scripts, `/destinos/[slug]` |
| `docs/fotos-y-contenido.md` | 19 destinos, categorías, prioridades |
| `docs/assets.md` | Carpeta `categorias/`, flyers nuevos |
| `docs/REPORTE-MEJORAS.md` | Este documento |

---

## Estado del catálogo (post-mejoras)

| Métrica | Valor |
|---------|-------|
| Destinos totales | 19 |
| Con plan detallado (`hasTravelPlan`) | 14 |
| Con flyer PNG (`hasPhoto`) | 7 |
| En sección Destacados | 6 |
| Páginas estáticas generadas | 20 (home + 19 destinos) |
| Monedas | ARS + USD |

---

## Pendiente recomendado (no incluido en este lote)

1. **Flyers internacionales** — Cancún, Punta Cana, Aruba, etc. tienen plan en texto pero sin PNG de marca.
2. **Regionales** — Salinas Grandes está `featured` pero sin plan ni foto; aparece solo en grilla general.
3. **Testimonios reales** — sección «Experiencias» sigue en placeholder.
4. **Dominio en producción** — definir `NEXT_PUBLIC_SITE_URL` en Vercel.
5. **Opcional:** mover `INFORMACIÓN BÁSICA DE DESTINOS.md` a `docs/` y limpiar formato Word.

---

## Cómo verificar localmente

```bash
npm run lint
npm run build
npm run dev
```

Checklist manual:
- [ ] Home: hero con botón WhatsApp
- [ ] Mosaic categorías: 3 fotos visibles
- [ ] `/?categoria=internacionales#viajes` filtra y persiste al cambiar tabs
- [ ] `/destinos/puerto-madryn`: hero con flyer + «Ver flyer»
- [ ] `/destinos/punta-cana`: destacado en home, precio USD, detalle con tiers
- [ ] Destacados: 6 cards (4 con foto + Cancún + Punta Cana)

---

## Conclusión

El proyecto quedó **más coherente entre datos, UI y documentación**. Los cambios son incrementales (sin reescritura) y orientados a lo que un usuario real y la agencia necesitan: **ver precios, filtrar, entrar al detalle y consultar por WhatsApp**.

**Valoración estimada:** 8.5/10 arquitectura · **8/10 listo para producción** (pendiente flyers internacionales y contenido social).
