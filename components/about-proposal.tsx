"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { SectionHeading } from "./section-heading";
import { WhatsAppButton } from "./whatsapp-button";
import { contact, defaultWhatsappMessage } from "@/src/data/contact";

export function AboutProposal() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -6% 0px",
  });

  return (
    <div
      ref={ref}
      className={`scroll-reveal container-page grid gap-10 lg:grid-cols-2 lg:gap-16 ${isVisible ? "is-visible" : ""}`}
    >
      <div className="about-proposal-copy">
        <SectionHeading
          eyebrow="Nuestra propuesta"
          title="Viajes con confianza, desde Córdoba"
          titleHighlight="Córdoba"
          animateUnderline
          subtitle="Ausland Aventuras nació para que descubrir un nuevo destino sea fácil: mirás el catálogo, elegís tu viaje y consultás directo con nosotros."
        />
        <p className="mt-6 text-sm leading-relaxed text-navy-deep/75 sm:text-base">
          Somos una agencia de viajes con base en {contact.location}. Trabajamos con salidas en bus y
          aéreo, planes con fechas publicadas y coordinación en ruta. Muchos de nuestros programas
          incluyen asistencia al viajero — consultá el detalle de cada destino antes de reservar.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-navy-deep/75 sm:text-base">
          En esta web encontrás destinos, precios orientativos e inclusiones. Para confirmar cupos,
          fechas y tarifas finales, escribinos por WhatsApp con la cantidad de personas y el viaje que
          te interesa.
        </p>
      </div>

      <div className="about-contact-card relative overflow-hidden rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy/8 sm:p-8">
        <div
          className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky/8"
          aria-hidden
        />
        <h2 className="relative font-display text-xl text-navy sm:text-2xl">Contacto directo</h2>
        <ul className="relative mt-5 space-y-3 text-sm text-navy-deep/80">
          <li>
            <span className="font-semibold text-navy">WhatsApp:</span> {contact.whatsapp.primary.display}
          </li>
          <li>
            <span className="font-semibold text-navy">Email:</span> {contact.email}
          </li>
          <li>
            <span className="font-semibold text-navy">Instagram:</span> @{contact.instagram.handle}
          </li>
          <li>
            <span className="font-semibold text-navy">Ubicación:</span> {contact.location}
          </li>
        </ul>
        <WhatsAppButton
          message={defaultWhatsappMessage}
          variant="primary"
          size="lg"
          className="relative mt-6 inline-flex w-full justify-center sm:w-auto"
          analyticsLocation="nosotros"
        >
          Consultar por WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
