import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { destinations } from "@/src/data/destinations";

export default function sitemap(): MetadataRoute.Sitemap {
  const destinationUrls = destinations.map((d) => ({
    url: `${site.url}/destinos/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...destinationUrls,
  ];
}
