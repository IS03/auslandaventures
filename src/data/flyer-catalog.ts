/**
 * Inventario de imágenes en /public y su vínculo con planes.
 * Útil para auditar extracción, OCR futuro o subir flyers nuevos.
 */
export type FlyerKind = "plan-primary" | "plan-variant" | "marketing-duplicate" | "brand";

export type FlyerCatalogEntry = {
  path: string;
  kind: FlyerKind;
  planId: string | null;
  destinationSlug: string | null;
  notes?: string;
};

export const flyerCatalog: FlyerCatalogEntry[] = [
  {
    path: "/destinos/puerto-madryn.png",
    kind: "plan-primary",
    planId: "puerto-madryn-2025",
    destinationSlug: "puerto-madryn",
  },
  {
    path: "/destinos/planes/puerto-madryn-agosto.png",
    kind: "plan-variant",
    planId: "puerto-madryn-2025",
    destinationSlug: "puerto-madryn",
    notes: "Mismo contenido que puerto-madryn.png",
  },
  {
    path: "/marketing/promo-01-puerto-madryn.png",
    kind: "marketing-duplicate",
    planId: "puerto-madryn-2025",
    destinationSlug: "puerto-madryn",
  },
  {
    path: "/destinos/salta.png",
    kind: "plan-primary",
    planId: "salta-mayo-junio",
    destinationSlug: "salta",
  },
  {
    path: "/marketing/explora-sur-argentino-01.png",
    kind: "marketing-duplicate",
    planId: "salta-mayo-junio",
    destinationSlug: "salta",
  },
  {
    path: "/destinos/cataratas.png",
    kind: "plan-primary",
    planId: "cataratas-mayo-junio",
    destinationSlug: "cataratas",
  },
  {
    path: "/marketing/promo-03.png",
    kind: "marketing-duplicate",
    planId: "cataratas-mayo-junio",
    destinationSlug: "cataratas",
  },
  {
    path: "/destinos/planes/cataratas-julio.png",
    kind: "plan-primary",
    planId: "cataratas-julio",
    destinationSlug: "cataratas",
  },
  {
    path: "/marketing/promo-04.png",
    kind: "marketing-duplicate",
    planId: "cataratas-julio",
    destinationSlug: "cataratas",
  },
  {
    path: "/destinos/planes/cataratas-agosto.png",
    kind: "plan-primary",
    planId: "cataratas-agosto-sep",
    destinationSlug: "cataratas",
  },
  {
    path: "/marketing/explora-sur-argentino.png",
    kind: "marketing-duplicate",
    planId: "cataratas-agosto-sep",
    destinationSlug: "cataratas",
  },
  {
    path: "/destinos/brasil-canasvieiras.png",
    kind: "plan-primary",
    planId: "brasil-canasvieiras",
    destinationSlug: "brasil-canasvieiras",
  },
  {
    path: "/marketing/explora-sur-argentino-05.png",
    kind: "marketing-duplicate",
    planId: "brasil-canasvieiras",
    destinationSlug: "brasil-canasvieiras",
  },
  {
    path: "/marketing/explora-sur-argentino-03.png",
    kind: "brand",
    planId: null,
    destinationSlug: null,
    notes: "Logo Ausland — sin datos de plan",
  },
];

export function flyersForPlan(planId: string): FlyerCatalogEntry[] {
  return flyerCatalog.filter((f) => f.planId === planId);
}

export function flyersWithoutPlan(): FlyerCatalogEntry[] {
  return flyerCatalog.filter((f) => f.planId === null);
}
