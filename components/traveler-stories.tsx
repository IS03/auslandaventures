import Link from "next/link";
import { contact, travelerStoryWhatsappMessage } from "@/src/data/contact";
import { SectionHeading } from "./section-heading";
import { WhatsAppButton } from "./whatsapp-button";

export function TravelerStories() {
  return (
    <section
      id="experiencias"
      className="section-padding section-surface-a section-surface-a--pre-footer overflow-x-hidden"
      aria-labelledby="experiencias-heading"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Comunidad"
          title="Experiencias de viajeros"
          subtitle="Tu opinión ayuda a otros a elegir su próximo destino."
          align="center"
          titleId="experiencias-heading"
        />

        <div className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl bg-white p-8 text-center ring-1 ring-navy/8 sm:mt-12 sm:p-12">
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
            ¿Ya viajaste con Ausland Aventuras?
          </p>

          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-navy-deep/65 sm:text-base">
            Contanos cómo fue tu viaje por WhatsApp. Con tu permiso, publicamos tu historia acá para
            que más personas se animen a conocer un nuevo destino.
          </p>

          <div className="relative mt-8 flex flex-col items-center gap-4">
            <WhatsAppButton
              message={travelerStoryWhatsappMessage}
              size="lg"
              variant="primary"
              ariaLabel="Compartir mi experiencia de viaje por WhatsApp"
              analyticsLocation="experiencias"
            >
              Compartir mi experiencia
            </WhatsAppButton>

            <p className="text-xs text-navy-deep/50 sm:text-sm">
              También podés seguirnos en{" "}
              <Link
                href={contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky underline decoration-sky/30 underline-offset-2 transition hover:text-navy hover:decoration-sky/60"
              >
                @{contact.instagram.handle}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
