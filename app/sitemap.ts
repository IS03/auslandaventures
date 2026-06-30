import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import { categoryPages } from "@/src/data/category-pages";
import { destinations, hrefForCategoryPage } from "@/src/data/destinations";

/** Pre-render estático en build; evita errores en runtime en producción. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryUrls = categoryPages.map((page) => ({
    url: absoluteUrl(hrefForCategoryPage(page.category)),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const destinationUrls = destinations.map((d) => ({
    url: absoluteUrl(`/destinos/${d.slug}`),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: site.url.replace(/\/$/, ""),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/nosotros"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/politicas"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...categoryUrls,
    ...destinationUrls,
  ];
}
