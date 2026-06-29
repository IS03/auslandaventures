import type { Destination } from "@/src/data/destinations";
import type { TravelPlan } from "@/src/data/plan-types";
import {
  currencyForDestination,
  minPriceForDestination,
} from "@/src/data/travel-plans";
import { DestinationHero } from "./destination-hero";
import { TravelPlanDetail } from "./travel-plan-detail";
import { WhatsAppButton } from "./whatsapp-button";

type DestinationDetailViewProps = {
  destination: Destination;
  plans: TravelPlan[];
};

export function DestinationDetailView({ destination, plans }: DestinationDetailViewProps) {
  const { title, whatsappMessage, slug } = destination;
  const priceFrom = minPriceForDestination(slug) ?? destination.priceFrom;
  const priceCurrency = currencyForDestination(slug) ?? destination.priceCurrency ?? "ARS";
  const hasMultiplePlans = plans.length > 1;

  return (
    <>
      <DestinationHero
        destination={destination}
        priceFrom={priceFrom}
        priceCurrency={priceCurrency}
      />

      <section className="section-padding section-surface-a">
        <div className="container-page">
          {plans.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 text-center shadow-card ring-1 ring-navy/8">
              <p className="text-navy-deep/75">
                Todavía no tenemos el detalle publicado de este destino. Consultanos por WhatsApp
                para fechas, precios y disponibilidad.
              </p>
              <WhatsAppButton
                message={whatsappMessage}
                variant="card"
                className="mt-6 inline-flex"
                ariaLabel={`Consultar viaje a ${title} por WhatsApp`}
                analyticsLocation="detail"
                destination={slug}
              >
                Consultar por WhatsApp
              </WhatsAppButton>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl text-navy sm:text-3xl">
                    {hasMultiplePlans ? "Opciones de viaje" : "Detalle del viaje"}
                  </h2>
                  <p className="mt-1 text-sm text-navy-deep/65">
                    Información según nuestros programas vigentes. Confirmá fechas y tarifas al
                    reservar.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {plans.map((plan) => (
                  <TravelPlanDetail
                    key={plan.id}
                    plan={plan}
                    showPlanTitle={hasMultiplePlans}
                  />
                ))}
              </div>

              <div className="mt-10 rounded-3xl bg-navy p-6 text-center text-white shadow-card sm:p-8">
                <p className="font-display text-xl sm:text-2xl">¿Te interesa este viaje?</p>
                <p className="mt-2 text-sm text-white/75">
                  Escribinos por WhatsApp con tu cantidad de personas y fechas preferidas.
                </p>
                <WhatsAppButton
                  message={whatsappMessage}
                  variant="primary"
                  size="lg"
                  className="mt-6 inline-flex"
                  ariaLabel={`Consultar viaje a ${title} por WhatsApp`}
                  analyticsLocation="detail"
                  destination={slug}
                >
                  Consultar por WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
