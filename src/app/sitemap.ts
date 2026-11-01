import type { MetadataRoute } from "next";
import { collections } from "@/content/collections";
import { navigation } from "@/content/navigation";
import { products } from "@/content/products";
import { absoluteUrl } from "@/lib/seo";

/** Real pages only: fixed pages from navigation.ts, plus every collection and product. */
const lastModified = new Date("2026-11-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = navigation
    .filter((n) => n.inSitemap)
    .map((n) => ({
      url: absoluteUrl(n.path),
      lastModified,
      changeFrequency: n.changeFrequency,
      priority: n.priority,
    }));

  const collectionUrls = collections.map((c) => ({
    url: absoluteUrl(`/collections/${c.slug}`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productUrls = products.map((p) => ({
    url: absoluteUrl(`/products/${p.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...fixed, ...collectionUrls, ...productUrls];
}
