import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/** Crawling stays allowed even while the concept is "noindex",
 *  so search engines can read the noindex tag on each page. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
