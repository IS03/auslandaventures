# Reporte de mejoras — Ausland Aventuras Web

**Fecha:** 25 de junio de 2026 (actualizado)  
**Alcance:** Pulido post-expansión del catálogo (19 destinos, páginas de detalle, planes internacionales, SEO y analytics).

---

## Resumen ejecutivo

Mejoras orientadas a producción: assets organizados, datos unificados, conversión WhatsApp en cards/header/FAB, SEO indexable, GA4, lightbox de flyers en detalle y CI automático.

| Área | Antes | Después |
|------|-------|---------|
| Imágenes categoría | Rutas confusas en raíz de `public/` | `public/categorias/` con nombres claros |
| Precios en catálogo | Duplicados en `destinations` y `travel-plans` | Derivados de `travel-plans` al exportar |
| `hasTravelPlan` | Set manual (riesgo de desync) | Derivado de `travelPlans` automáticamente |
| Destacados | Solo destinos con flyer | Flyer **o** plan publicado (ej. Cancún, Punta Cana) |
| Hero home | CTA variado | H1 «Agencia de viajes en Córdoba» + enlace «Ver destacados»; WhatsApp en header, cards, FAB y footer |
| Filtros categoría | URL → estado (solo lectura) | **Bidireccional** (`?categoria=…` al cambiar tabs) |
| Hero detalle | Flyer estirado de fondo | **Gradiente por categoría** + botón «Ver flyer» (lightbox) |
| Flyers en UI | Lightbox sin uso tras rediseño de cards | Botón **«Ver flyer»** en página de detalle |
| Accesibilidad filtros | Patrón `tablist` incompleto | `role="group"` + `aria-pressed` |
| CSS | `z-index` duplicado | Corregido |
| Documentación | Desactualizada | README + `docs/` alineados (`docs/analytics.md`, `docs/contenido/`) |
| CI | Ninguno | GitHub Actions: `npm ci` + `npm run build` |
| Analytics | Sin medición | GA4 (`G-0C6V3MFHHE`) + evento `whatsapp_click` |
| Experiencias | Placeholder «Muy pronto» | Invitación a compartir experiencia por WhatsApp |

---

## 1. Assets — imágenes de categoría

**Problema:** Las imágenes del mosaic (`postcss.config.jpeg`, etc.) tenían nombres accidentales aunque existían en disco.

**Solución:**
- Copiadas a `public/categorias/nacionales.jpeg`, `internacionales.jpg`, `regionales.webp`
- Actualizado `categoryShowcaseBlocks` y `categoryPlaceholderImage` en `src/data/destinations.ts`
- Limpieza de duplicados ZIP en `public/destinos/` y `docs/`; textos fuente en `docs/contenido/`

**Impacto:** Mosaic, cards sin flyer y placeholders usan rutas mantenibles.

---

## 2. Datos — precios y planes sincronizados

**Archivo:** `src/data/destinations.ts`

- `hasTravelPlan` derivado de `travelPlans.map(p => p.destinationSlug)`.
- Al exportar `destinations`, cada destino enriquece:
  - `priceFrom` ← `minPriceForDestination(slug)` con fallback al valor del catálogo
  - `priceCurrency` ← `currencyForDestination(slug)`
  - `hasTravelPlan` ← presencia en planes

**Impacto:** Un solo lugar para actualizar precios (`travel-plans.ts`).

---

## 3. Destacados ampliados

**Antes:** `featured && hasPhoto` → solo flyers clásicos.

**Ahora:** `featured && (hasPhoto || hasTravelPlan)` → incluye destinos con plan USD (Cancún, Punta Cana, etc.).

Carrusel horizontal con ancho fijo en desktop.

---

## 4. Hero home — presentación y navegación

**Archivo:** `components/hero.tsx`

- H1: **«Agencia de viajes en Córdoba»**
- Subtítulo: eslogan de marca
- CTA principal en hero: enlace **«Ver destacados»** (scroll a `#destacados`)
- WhatsApp **no** está en el hero (decisión de producto); conversión vía header, cards, detalle, FAB flotante y footer

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

- Hero con **gradiente por categoría** (sin flyer estirado de fondo).
- Si hay flyer → **FlyerLightboxTrigger** («Ver flyer») con variantes.
- Sin flyer → marca y datos del plan cuando existen.

---

## 7. Accesibilidad y CSS

- `CategoryTabs`: de `tablist`/`tab` a `group` + `aria-pressed`.
- `TripExplorer`: región `#resultados-viajes` para resultados.
- `globals.css`: eliminado `z-index` duplicado en textura de secciones.

---

## 8. CI (GitHub Actions)

**Archivo:** `.github/workflows/ci.yml` (versionado en el repo)

En cada push/PR a `main`/`master`:
1. `npm ci`
2. `npm run build`

Node 22 en `ubuntu-latest`.

---

## 9. Analytics (GA4)

**Archivos:** `app/layout.tsx`, `lib/gtag-id.ts`, `lib/analytics.ts`, `docs/analytics.md`

- ID de medición: `G-0C6V3MFHHE` (Vercel + `.env.local`)
- Evento personalizado `whatsapp_click` con parámetro `location` (header, fab, footer, card, detail, nosotros, experiencias)

---

## 10. Sección Experiencias

**Archivo:** `components/traveler-stories.tsx`

- Sin placeholder «Muy pronto».
- Invitación a viajeros a compartir su experiencia por WhatsApp.
- Enlace a Instagram.
- Removido del navbar principal (la sección sigue en el home al hacer scroll).

---

## 11. Documentación

| Archivo | Cambio |
|---------|--------|
| `README.md` | Estructura actual, scripts, analytics |
| `docs/fotos-y-contenido.md` | 19 destinos, categorías |
| `docs/assets.md` | Carpetas `categorias/`, `marketing/`, `docs/contenido/` |
| `docs/analytics.md` | Configuración y verificación GA4 |
| `docs/REPORTE-MEJORAS.md` | Este documento |

---

## Estado del catálogo (actualizado)

| Métrica | Valor |
|---------|-------|
| Destinos totales | 19 |
| Con plan detallado (`hasTravelPlan`) | 14 |
| Con flyer PNG (`hasPhoto`) | 11 |
| Páginas estáticas generadas | 31 (home, categorías, nosotros, políticas, destinos) |
| Monedas | ARS + USD |

---

## Pendiente recomendado

1. **Flyers pendientes** — Brasil Torres, regionales (Cura Brochero, Salinas Grandes, etc.), Río/Maceio/Bayahibe sin PNG de marca.
2. **Bariloche** — flyer en `docs/pendientes/`; falta destino en catálogo.
3. **Testimonios publicados** — cuando el cliente comparta historias, sumar cards en `#experiencias`.
4. **Search Console** — verificar dominio y enviar sitemap (propagación DNS).
5. **Marcar `whatsapp_click` como conversión** en panel GA4.

---

## Cómo verificar localmente

```bash
npm run lint
npm run build
npm run dev
```

Checklist manual:
- [ ] Home: hero con H1 y enlace «Ver destacados» (sin WhatsApp en hero)
- [ ] Mosaic categorías: 3 fotos visibles
- [ ] `/?categoria=internacionales#viajes` filtra y persiste al cambiar tabs
- [ ] `/destinos/puerto-madryn`: gradiente en hero + «Ver flyer»
- [ ] `/destinos/punta-cana`: precio USD, detalle con tiers
- [ ] FAB y header: WhatsApp abre con mensaje prearmado
- [ ] Sección Experiencias: CTA «Compartir mi experiencia»

---

## Conclusión

El proyecto quedó **más coherente entre datos, UI y documentación**. Los cambios son incrementales y orientados a consultas por WhatsApp fuera del hero, SEO indexable y medición de conversiones.

**Valoración estimada:** 8.5/10 arquitectura · **8.5/10 listo para producción** (pendiente flyers de destinos thin y contenido del cliente).
