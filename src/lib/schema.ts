/**
 * schema.ts — all structured data (JSON-LD) builders.
 * These labels tell search engines what each page is about.
 * Never add Review or AggregateRating without real, checkable reviews.
 */
import { site } from "@/content/site";
import type { Faq } from "@/content/faqs";
import type { Product } from "@/content/products";
import { absoluteUrl } from "./seo";

const orgId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;
const storeId = `${site.url}/#store`;

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/images/logo/logo.svg"),
    email: site.email,
    telephone: site.phoneIntl,
    sameAs: site.socials.map((s) => s.url),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.phoneIntl,
      email: site.email,
      areaServed: "PH",
      availableLanguage: ["en", "fil", "ceb"],
    },
  };
}

export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.name,
    inLanguage: site.lang,
    publisher: { "@id": orgId },
  };
}

export function storeSchema(): Json {
  return {
    "@type": "Store",
    "@id": storeId,
    name: site.name,
    description: site.description,
    url: site.url,
    image: absoluteUrl("/opengraph-image"),
    telephone: site.phoneIntl,
    email: site.email,
    priceRange: "₱₱",
    currenciesAccepted: "PHP",
    paymentAccepted: "Cash, GCash, Maya, Bank transfer",
    address: {
      "@type": "PostalAddress",
      ...(site.address.street ? { streetAddress: site.address.street } : {}),
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: site.areasServed.map((name) => ({ "@type": "Place", name })),
    parentOrganization: { "@id": orgId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]): Json {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function productSchema(product: Product): Json {
  return {
    "@type": "Product",
    "@id": absoluteUrl(`/products/${product.slug}#product`),
    name: product.name,
    description: product.story,
    image: absoluteUrl(`/products/${product.slug}/opengraph-image`),
    brand: { "@type": "Brand", name: site.name },
    category: "Eau de parfum",
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/products/${product.slug}`),
      priceCurrency: "PHP",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: { "@id": orgId },
    },
  };
}

export function itemListSchema(name: string, path: string, list: Product[]): Json {
  return {
    "@type": "CollectionPage",
    name,
    url: absoluteUrl(path),
    isPartOf: { "@id": websiteId },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: list.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absoluteUrl(`/products/${p.slug}`),
        name: p.name,
      })),
    },
  };
}

/** Wraps several nodes in one @graph. */
export function graph(...nodes: Json[]): Json {
  return { "@context": "https://schema.org", "@graph": nodes };
}
