import { SectionHeading } from "./section-heading";

export function TravelerStories() {
  return (
    <section
      id="experiencias"
      className="section-padding section-surface-a section-surface-a--pre-footer overflow-x-hidden"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Comunidad"
          title="Experiencias de viajeros"
          subtitle="Historias y opiniones de quienes viajan con nosotros."
          align="center"
        />

        <div
          className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl bg-white p-8 text-center ring-1 ring-navy/8 sm:mt-12 sm:p-12"
          role="status"
          aria-live="polite"
        >
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-amber/10"
            aria-hidden
          />

          <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-sky text-white shadow-md shadow-navy/15">
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </div>

          <p className="relative font-display text-xl font-semibold text-navy sm:text-2xl text-balance">
            Muy pronto vamos a compartir experiencias reales de quienes viajen con Ausland Aventuras.
          </p>

          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-navy-deep/65 sm:text-base">
            Cuando tengamos reseñas de viajeros, las publicamos acá. Mientras tanto, escribinos y
            contanos qué destino te interesa.
          </p>

          <ul
            className="relative mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-navy/8 pt-8 text-xs font-semibold uppercase tracking-wide text-navy/40"
            aria-hidden
          >
            <li className="text-navy/25">·</li>
            <li>Próximamente</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
