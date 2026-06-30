"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { SectionHeading } from "./section-heading";

const values = [
  {
    title: "Cercanía",
    text: "Te respondemos por WhatsApp con fechas, precios y opciones concretas. Sin formularios eternos ni call centers.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
  },
  {
    title: "Coordinación en ruta",
    text: "Acompañamiento antes y durante el viaje para que disfrutes la experiencia sin resolver todo solo.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    title: "Variedad de destinos",
    text: "Nacionales, internacionales y salidas regionales pensadas para viajar desde Córdoba.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
      />
    ),
  },
  {
    title: "Información clara",
    text: "Publicamos inclusiones, fechas y tarifas orientativas para que sepas qué estás consultando.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
] as const;

export function AboutValues() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -6% 0px",
  });

  return (
    <div
      ref={ref}
      className={`scroll-reveal container-page ${isVisible ? "is-visible" : ""}`}
    >
      <SectionHeading
        eyebrow="Valores"
        title="Por qué viajar con nosotros"
        align="center"
      />

      <ul className="mt-10 grid list-none gap-5 sm:grid-cols-2 sm:gap-6">
        {values.map((item, index) => (
          <li key={item.title}>
            <article
              data-card={index + 1}
              className="why-ausland-card group relative h-full overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-navy/8 transition-[transform,box-shadow] duration-300 ease-out hover:ring-sky/35 sm:p-8"
            >
              <div
                className="why-ausland-card__accent absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky/10 transition group-hover:bg-amber/15"
                aria-hidden
              />
              <div className="why-ausland-card__icon relative flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  {item.icon}
                </svg>
              </div>
              <h3 className="relative mt-4 font-display text-xl font-semibold text-navy">{item.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-navy-deep/70">{item.text}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
