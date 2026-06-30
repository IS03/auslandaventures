"use client";

import Link from "next/link";
import { contact, travelerStoryWhatsappMessage } from "@/src/data/contact";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { InstagramShowcase } from "./instagram-showcase";
import { SectionHeading } from "./section-heading";
import { WhatsAppButton } from "./whatsapp-button";

export function TravelerStories() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: "0px 0px -6% 0px",
  });

  return (
    <section
      id="experiencias"
      className="section-padding section-surface-a section-surface-a--pre-footer overflow-x-hidden"
      aria-labelledby="experiencias-heading"
    >
      <div
        ref={ref}
        className={`scroll-reveal container-page ${isVisible ? "is-visible" : ""}`}
      >
        <SectionHeading
          eyebrow="Comunidad"
          title="Experiencias de viajeros"
          titleHighlight="viajeros"
          animateUnderline
          subtitle="Seguinos en Instagram y contanos tu viaje cuando vuelvas."
          align="center"
          titleId="experiencias-heading"
        />

        <InstagramShowcase />

        <div className="relative mx-auto mt-8 max-w-2xl overflow-hidden rounded-3xl bg-white p-8 text-center ring-1 ring-navy/8 sm:mt-10 sm:p-10">
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-amber/10"
            aria-hidden
          />

          <p className="relative font-display text-xl font-semibold text-navy sm:text-2xl text-balance">
            ¿Ya viajaste con Ausland Aventuras?
          </p>

          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-navy-deep/65 sm:text-base">
            Contanos cómo fue tu viaje por WhatsApp. Con tu permiso, publicamos tu historia para que
            más personas se animen a conocer un nuevo destino.
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
              Más novedades en{" "}
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
