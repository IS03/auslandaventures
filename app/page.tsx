import { Suspense } from "react";
import { CategoryShowcase } from "@/components/category-showcase";
import { FeaturedTrips } from "@/components/featured-trips";
import { Hero } from "@/components/hero";
import { HowWeWork } from "@/components/how-we-work";
import { PaymentMethods } from "@/components/payment-methods";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TravelerStories } from "@/components/traveler-stories";
import { TripExplorer } from "@/components/trip-explorer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { WhyAusland } from "@/components/why-ausland";

function TripExplorerFallback() {
  return (
    <section
      className="section-padding section-surface-c overflow-x-hidden"
      aria-hidden
    >
      <div className="container-page min-h-[min(420px,50vh)] animate-pulse rounded-3xl bg-white/5" />
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" tabIndex={-1} className="outline-none max-lg:pb-4 lg:pb-0">
        <Hero />
        <CategoryShowcase />
        <FeaturedTrips />
        <HowWeWork />
        <Suspense fallback={<TripExplorerFallback />}>
          <TripExplorer />
        </Suspense>
        <WhyAusland />
        <PaymentMethods />
        <TravelerStories />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
