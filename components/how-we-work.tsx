"use client";

import { Fragment } from "react";
import { SectionHeading } from "./section-heading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { howWeWorkSteps } from "@/src/data/home-sections";

function MobileConnector({ afterStep }: { afterStep: 1 | 2 }) {
  return (
    <li
      className={`how-we-work-mobile-connector how-we-work-mobile-connector--after-${afterStep} list-none sm:hidden`}
      aria-hidden
    >
      <span className="how-we-work-mobile-connector__line" />
    </li>
  );
}

function DesktopBridge({ bridge }: { bridge: "a" | "b" }) {
  return (
    <li
      className={`how-we-work-bridge how-we-work-bridge--${bridge} hidden list-none sm:flex`}
      aria-hidden
    >
      <span className="how-we-work-bridge__line" />
    </li>
  );
}

function StepContent({ step, title, description }: { step: number; title: string; description: string }) {
  return (
    <>
      <div className="how-we-work-ball relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white shadow-md shadow-navy/20 ring-4 ring-sand">
        {step}
      </div>
      <div className="how-we-work-copy w-full text-center">
        <h3 className="mt-5 font-display text-xl font-semibold text-navy sm:text-[1.35rem]">{title}</h3>
        <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-navy-deep/68">
          {description}
        </p>
      </div>
    </>
  );
}

export function HowWeWork() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -8% 0px",
  });

  return (
    <section
      id="como-trabajamos"
      className="section-padding section-surface-warm overflow-x-hidden"
      aria-labelledby="como-trabajamos-heading"
    >
      <div
        ref={ref}
        className={`how-we-work-reveal container-page ${isVisible ? "is-visible" : ""}`}
      >
        <div className="how-we-work-heading">
          <SectionHeading
            eyebrow="Simple y rápido"
            title="¿Cómo trabajamos?"
            titleHighlight="trabajamos"
            subtitle="En 3 pasos tenés tu viaje consultado y listo para reservar."
            align="center"
            titleId="como-trabajamos-heading"
          />
        </div>

        {/* Desktop: 5 columnas — paso | línea | paso | línea | paso */}
        <ol className="how-we-work-timeline relative mx-auto mt-12 hidden max-w-4xl list-none sm:mt-14 sm:grid sm:grid-cols-[1fr_5rem_1fr_5rem_1fr] sm:items-start lg:max-w-5xl lg:grid-cols-[1fr_7rem_1fr_7rem_1fr]">
          {howWeWorkSteps.map((item, index) => (
            <Fragment key={item.step}>
              <li
                className="how-we-work-step flex flex-col items-center"
                data-step={item.step}
              >
                <StepContent step={item.step} title={item.title} description={item.description} />
              </li>
              {index === 0 ? <DesktopBridge bridge="a" /> : null}
              {index === 1 ? <DesktopBridge bridge="b" /> : null}
            </Fragment>
          ))}
        </ol>

        {/* Móvil: columna vertical */}
        <ol className="how-we-work-timeline relative mx-auto mt-12 max-w-md list-none sm:mt-14 sm:hidden">
          {howWeWorkSteps.map((item, index) => (
            <Fragment key={item.step}>
              <li className="how-we-work-step flex flex-col items-center" data-step={item.step}>
                <StepContent step={item.step} title={item.title} description={item.description} />
              </li>
              {index < howWeWorkSteps.length - 1 ? (
                <MobileConnector afterStep={(index + 1) as 1 | 2} />
              ) : null}
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}
