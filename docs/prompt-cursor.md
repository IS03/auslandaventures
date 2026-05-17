# Prompt principal para Cursor

Quiero crear la landing principal de Ausland Aventuras.

Usá Next.js App Router, React, TypeScript y Tailwind CSS. Aplicá las reglas del proyecto (`.cursor/rules/project-ausland.md`) y las skills `ausland-brand` y `frontend-design`.

La web es para una agencia/emprendimiento de viajes de Córdoba, Argentina. Debe sentirse fresca, aventurera, confiable, cálida y moderna. No quiero una landing genérica de IA.

Inspiración visual:
- De Buenas Vibras tomar detalles funcionales: buscador de viajes, filtros, categorías, cards con precio desde, experiencias de viajeros y footer útil.
- De Lunagui Viajes tomar el home superior con imagen grande, frase emocional y CTA claro.
- No copiar literalmente ninguna web.

Archivos de contexto:
- Leé `/docs/brief-ausland.md`.
- Leé `/docs/referencias-visuales.md`.
- Leé `/docs/contacto.md` y usá `/src/data/contact.ts` para links de WhatsApp.
- Leé `/docs/stack.md`.
- Usá `/src/data/destinations.ts` como fuente de datos inicial.

Secciones necesarias:
1. Hero con foto grande de viaje, nombre/logo Ausland Aventuras, frase “La aventura de conocer un nuevo destino” y botón a WhatsApp.
2. Buscador visual con filtros: origen, destino, mes de salida y tipo de viaje.
3. Categorías grandes: Nacionales, Internacionales, Regionales / Full Day.
4. Cards de destinos:
   - Puerto Madryn
   - Salta
   - Cataratas
   - Termas de Río Hondo
   - Mendoza
   - Buenos Aires
   - Brasil Canasvieiras
   - Brasil Torres
   - Caribe
   - Cura Brochero
   - Salinas Grandes
   - Villa General Belgrano
   - Mar Chiquita
5. Sección de viajes destacados.
6. Sección “Por qué elegir Ausland Aventuras”.
7. Experiencias de viajeros.
8. Footer con WhatsApp, Instagram, contacto y legales básicos.

Requisitos de diseño:
- Mobile-first.
- Visualmente muy cuidada.
- Usar fotos grandes de destinos.
- Usar detalles sutiles de viaje: mapa, rutas, stickers, brújula, avión, montaña, palmeras o arco de Córdoba.
- Paleta sugerida: celeste cielo, turquesa, amarillo/naranja cálido y azul profundo.
- Tipografía con personalidad, no usar un diseño plano/default.
- Microinteracciones en botones y cards.
- Animaciones sutiles.
- Buen contraste.
- Componentes limpios.

Requisitos técnicos:
- Crear componentes separados.
- No meter todo en `page.tsx`.
- Usar arrays mockeados.
- Preparar estructura para que luego cada destino pueda tener su propia página.
- Dejar comentarios mínimos donde haga falta.
- No agregar backend todavía.

Primero hacé una implementación completa de la landing. Después explicame qué archivos creaste o modificaste y qué debería reemplazar con assets reales.
