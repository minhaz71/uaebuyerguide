import type { MetadataRoute } from "next";
import {
  businesses,
  categories,
  categorySlug,
  guideCategories,
  guideSites,
  resourceCategorySlug,
} from "./data";
import { siteUrl } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    ...guideCategories.map((category) => ({
      url: `${siteUrl}/category/${categorySlug(category)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.86,
    })),
    ...categories.map((category) => ({
      url: `${siteUrl}/resources/${resourceCategorySlug(category)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    })),
    ...guideSites.map((site) => ({
      url: `${siteUrl}/reviews/${site.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: site.slug === "tereahub-ae" || site.slug === "tereazone-ae" ? 0.95 : 0.78,
    })),
    ...businesses.map((business) => ({
      url: `${siteUrl}/business/${business.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
  ];
}
