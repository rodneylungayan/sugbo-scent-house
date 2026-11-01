import type { Metadata } from "next";
import { features } from "@/config/features";
import { site } from "@/content/site";

export type SeoInput = {
  title: string;
  description: string;
  path: string;
  keyphrase: string;
  /** Optional punchier headline for social shares */
  ogTitle?: string;
  ogDescription?: string;
  type?: "website" | "article";
  /** Force noindex (404, utility pages). The global switch is features.indexable. */
  noindex?: boolean;
};

const TITLE_MAX = 60;
const DESCRIPTION_MAX = 155;
const seenKeyphrases = new Map<string, string>();

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

/** Builds full metadata for a page: title, description, canonical,
 *  robots, Open Graph and X (Twitter) tags. Share images come from each
 *  route's opengraph-image / twitter-image file. */
export function buildMetadata(input: SeoInput): Metadata {
  if (process.env.NODE_ENV === "development") warnInDev(input);

  const fullTitle = input.title.includes(site.name) ? input.title : `${input.title} | ${site.name}`;
  const ogTitle = input.ogTitle ?? fullTitle;
  const ogDescription = input.ogDescription ?? input.description;
  const indexable = features.indexable && !input.noindex;

  return {
    title: { absolute: fullTitle },
    description: input.description,
    keywords: [input.keyphrase],
    alternates: { canonical: input.path },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: true, googleBot: { index: false, follow: true } },
    openGraph: {
      type: input.type ?? "website",
      locale: site.locale,
      url: input.path,
      siteName: site.name,
      title: ogTitle,
      description: ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      ...(site.twitterHandle ? { site: site.twitterHandle, creator: site.twitterHandle } : {}),
    },
  };
}

function warnInDev({ title, description, keyphrase, path }: SeoInput) {
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  if (fullTitle.length > TITLE_MAX + 20) {
    console.warn(`[seo] ${path}: title is ${fullTitle.length} characters (aim for about ${TITLE_MAX}).`);
  }
  if (description.length > DESCRIPTION_MAX) {
    console.warn(`[seo] ${path}: description is ${description.length} characters (max ${DESCRIPTION_MAX}).`);
  }
  const key = keyphrase.toLowerCase();
  const owner = seenKeyphrases.get(key);
  if (owner && owner !== path) {
    console.warn(`[seo] Keyphrase "${keyphrase}" is used by ${owner} and ${path}. Give each page its own.`);
  }
  seenKeyphrases.set(key, path);
}
