"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { paymentPolicy } from "@/src/data/politicas";
import { SectionHeading } from "./section-heading";

const methodIcons: Record<string, string> = {
  Efectivo: "💵",
  "Transferencia bancaria": "🏦",
};

export function PaymentMethods() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -6% 0px",
  });

  return (
    <section
      id="pagos"
      className="section-padding section-surface-c overflow-x-hidden"
      aria-labelledby="pagos-heading"
    >
      <div
        ref={ref}
        className={`scroll-reveal container-page ${isVisible ? "is-visible" : ""}`}
      >
        <SectionHeading
          eyebrow="Reservá con tranquilidad"
          title="Medios de pago"
          titleHighlight="pago"
          animateUnderline
          subtitle="Opciones claras para señar tu lugar y terminar el saldo antes de viajar."
          align="center"
          titleId="pagos-heading"
        />

        <ul className="mt-8 flex list-none flex-wrap justify-center gap-3 sm:mt-10">
          {paymentPolicy.methods.map((method) => (
            <li key={method}>
              <span className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-navy shadow-sm ring-1 ring-navy/8">
                <span aria-hidden>{methodIcons[method] ?? "✓"}</span>
                {method}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          <article className="rounded-3xl bg-white p-6 ring-1 ring-navy/8 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-navy sm:text-xl">
              <span aria-hidden className="mr-1.5">
                ✈️
              </span>
              Destinos nacionales
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-deep/70">
              {paymentPolicy.depositNote} {paymentPolicy.installmentsNote}
            </p>
          </article>

          <article className="rounded-3xl bg-white p-6 ring-1 ring-navy/8 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-navy sm:text-xl">
              <span aria-hidden className="mr-1.5">
                🌍
              </span>
              Destinos internacionales
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-deep/70">
              {paymentPolicy.depositNote} Consultá financiación y cuotas disponibles según el
              programa al reservar.
            </p>
          </article>
        </div>

        <p className="mt-8 text-center text-sm text-navy-deep/60">
          <Link
            href="/politicas"
            className="font-semibold text-navy transition hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          >
            Ver términos, cancelaciones y legajo →
          </Link>
        </p>
      </div>
    </section>
  );
}
