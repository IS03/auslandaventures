export {
  destinations,
  destinationBySlug,
  hrefForDestination,
  destinationCategories,
  destinationImageFallback,
  featuredDestinations,
  destinationsWithPhoto,
  categoryShowcaseBlocks,
  categoryPlaceholderImage,
  categoryShortLabel,
  type Destination,
  type DestinationCategory,
} from "./destinations";

export { contact, defaultWhatsappMessage, buildDestinationWhatsappMessage, whatsappUrl } from "./contact";

export {
  travelPlans,
  plansByDestination,
  planById,
  minPriceForDestination,
  formatDeparturesShort,
  getDestinationCardMeta,
  currencyForDestination,
  type TravelPlan,
  type PlanDeparture,
  type AccommodationTier,
  type PlanTerms,
  type DestinationCardMeta,
} from "./travel-plans";

export { flyerCatalog, flyersForPlan, flyersWithoutPlan, type FlyerCatalogEntry } from "./flyer-catalog";
