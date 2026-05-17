import { testimonials } from "@/src/data/testimonials";
import { SectionHeading } from "./section-heading";

export function TravelerStories() {
  return (
    <section id="experiencias" className="section-padding bg-sand">
      <div className="container-page">
        <SectionHeading
          eyebrow="Comunidad"
          title="Experiencias de viajeros"
          subtitle="Lo que suele valorar quien viaja con una agencia cercana y bien coordinada."
          align="center"
        />

        <p className="mx-auto mt-3 max-w-lg text-center text-xs text-navy-deep/50">
          Referencias ilustrativas — podés reemplazarlas por testimonios reales cuando los tengas.
        </p>

        <ul className="mt-8 grid list-none gap-5 sm:mt-10 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {testimonials.map((t) => (
            <li key={t.id}>
              <blockquote className="flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-navy/8">
                <div className="mb-3 flex gap-0.5 text-amber" aria-label={`${t.rating} de 5`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} aria-hidden>
                      ★
                    </span>
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-navy-deep/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-5 border-t border-navy/8 pt-4">
                  <cite className="not-italic">
                    <span className="font-semibold text-navy">{t.name}</span>
                    <span className="mt-0.5 block text-xs font-medium text-sky">{t.destination}</span>
                  </cite>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
