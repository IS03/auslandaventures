import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { absoluteUrl, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import {
  agencyLocationNote,
  cancellationPolicy,
  paymentPolicy,
  travelAgencyRegistry,
} from "@/src/data/politicas";

const title = "Términos, pagos y cancelaciones";
const description =
  "Condiciones de reserva, medios de pago, cancelaciones y legajo habilitante de Ausland Aventuras, agencia de viajes en Córdoba.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: absoluteUrl("/politicas") },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: absoluteUrl("/politicas"),
    siteName: site.name,
    title: `${title} | ${site.name}`,
    description,
  },
  robots: { index: true, follow: true },
};

export default function PoliticasPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Inicio", path: "/" },
      { name: title, path: "/politicas" },
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <main id="contenido" tabIndex={-1} className="outline-none max-lg:pb-4 lg:pb-0">
        <section
          id="hero"
          className="relative min-h-[min(48vh,26rem)] overflow-hidden bg-navy-deep text-white"
        >
          <div className="container-page relative flex min-h-[min(48vh,26rem)] flex-col justify-end pb-10 pt-28 sm:pb-12 sm:pt-32">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-light">Transparencia</p>
            <h1 className="mt-2 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Términos, pagos y cancelaciones
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              Información general para consultar antes de reservar. Ante cualquier duda, confirmá
              las condiciones vigentes de tu viaje con nuestro equipo.
            </p>
          </div>
        </section>

        <section className="section-padding section-surface-a">
          <div className="container-page mx-auto max-w-3xl space-y-10">
            <article className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy/8 sm:p-8">
              <h2 className="font-display text-xl text-navy sm:text-2xl">Agencia habilitada</h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-deep/75 sm:text-base">
                {agencyLocationNote}
              </p>
              <p className="mt-4 text-sm text-navy-deep/80">
                <span className="font-semibold text-navy">Legajo RNAV:</span>{" "}
                {travelAgencyRegistry.legajo}
              </p>
              <p className="mt-3">
                <a
                  href={travelAgencyRegistry.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-sky transition hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                >
                  Consultar en el Registro Nacional de Agencias de Viajes →
                </a>
              </p>
            </article>

            <article className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy/8 sm:p-8">
              <h2 className="font-display text-xl text-navy sm:text-2xl">Medios de pago</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-navy-deep/75 sm:text-base">
                {paymentPolicy.methods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-navy-deep/75 sm:text-base">
                {paymentPolicy.depositNote}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-deep/75 sm:text-base">
                {paymentPolicy.installmentsNote}
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-navy/70">
                {paymentPolicy.installmentPackagesTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-deep/75 sm:text-base">
                {paymentPolicy.installmentPackagesText}
              </p>
            </article>

            <article className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy/8 sm:p-8">
              <h2 className="font-display text-xl text-navy sm:text-2xl">Cancelaciones</h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-deep/75 sm:text-base">
                {cancellationPolicy.intro}
              </p>

              <h3 className="mt-6 font-display text-lg text-navy">
                {cancellationPolicy.busServicesTitle}
              </h3>
              <p className="mt-2 text-sm text-navy-deep/65">
                {cancellationPolicy.busServicesNote}
              </p>
              <ul className="mt-4 space-y-2">
                {cancellationPolicy.busTiers.map((tier) => (
                  <li
                    key={tier.days}
                    className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl bg-sage/80 px-4 py-3 text-sm ring-1 ring-navy/6"
                  >
                    <span className="text-navy-deep/80">{tier.days}</span>
                    <span className="font-bold text-navy">Retención {tier.retention}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm leading-relaxed text-navy-deep/75">
                {cancellationPolicy.duringTrip}
              </p>

              <h3 className="mt-6 font-display text-lg text-navy">
                {cancellationPolicy.airPackagesTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-deep/75">
                {cancellationPolicy.airPackagesText}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-deep/75">
                {cancellationPolicy.cruisesCharters}
              </p>
            </article>

            <p className="text-center text-sm text-navy-deep/60">
              Los precios publicados en el sitio son orientativos.{" "}
              <Link href="/#viajes" className="font-semibold text-navy hover:text-sky">
                Ver viajes
              </Link>{" "}
              ·{" "}
              <Link href="/nosotros" className="font-semibold text-navy hover:text-sky">
                Sobre nosotros
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
