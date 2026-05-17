export {
  destinations,
  destinationCategories,
  destinationImageFallback,
  featuredDestinations,
  destinationsWithPhoto,
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
  getFlyerImagesForDestination,
  type TravelPlan,
  type PlanDeparture,
  type AccommodationTier,
  type PlanTerms,
  type DestinationCardMeta,
} from "./travel-plans";

export { flyerCatalog, flyersForPlan, flyersWithoutPlan, type FlyerCatalogEntry } from "./flyer-catalog";
