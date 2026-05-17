import { FeaturedTrips } from "@/components/featured-trips";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TravelerStories } from "@/components/traveler-stories";
import { TripExplorer } from "@/components/trip-explorer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { WhyAusland } from "@/components/why-ausland";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" tabIndex={-1} className="outline-none max-lg:pb-4 lg:pb-0">
        <Hero />
        <TripExplorer />
        <FeaturedTrips />
        <WhyAusland />
        <TravelerStories />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
