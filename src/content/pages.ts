/**
 * pages.ts — SEO record for each fixed page.
 * Every page gets ONE focus keyphrase (no two pages share one).
 * Title: 60 characters or fewer. Description: 155 or fewer.
 * The H1 and intro are shown at the top of the page.
 */
export type PageRecord = {
  path: string;
  title: string;
  description: string;
  keyphrase: string;
  h1: string;
  intro: string;
  breadcrumb: string;
};

export const pages = {
  home: {
    path: "/",
    title: "Perfume Shop in Cebu – Sugbo Scent House",
    description:
      "A local perfume shop in Cebu City. Fresh day scents and rich night scents. Order on Messenger, same-day delivery in Metro Cebu.",
    keyphrase: "perfume shop Cebu",
    h1: "Perfume made for Cebu days and nights",
    intro:
      "Fresh scents for hot days. Rich scents for big nights. Order on Messenger and get it the same day in Metro Cebu.",
    breadcrumb: "Home",
  },
  shop: {
    path: "/shop",
    title: "Buy Perfume Online in Cebu – Shop All Scents",
    description:
      "Browse all our perfumes in one place, from fresh day scents to rich night scents. Order on Messenger. COD in Metro Cebu.",
    keyphrase: "buy perfume online Cebu",
    h1: "Buy perfume online in Cebu",
    intro:
      "Every scent we make, in one place. Pick a mood below, or scroll to find the one that feels like you.",
    breadcrumb: "Shop All",
  },
  about: {
    path: "/about",
    title: "Our Story – A Local Perfume House in Cebu",
    description:
      "Meet Sugbo Scent House, a small perfume house in Cebu City. Original scents made for warm island days and city nights.",
    keyphrase: "local perfume house Cebu",
    h1: "A local perfume house in Cebu",
    intro:
      "We make original scents for life on the island: hot days, long commutes, beach weekends and bright city nights.",
    breadcrumb: "About",
  },
  visit: {
    path: "/visit",
    title: "Visit Our Perfume Store in Cebu City",
    description:
      "Visit our perfume store in Cebu City, try scents in person, or order for pickup and same-day delivery in Metro Cebu.",
    keyphrase: "perfume store Cebu City",
    h1: "Visit our perfume store in Cebu City",
    intro:
      "Come and try any scent in person, or send us a message. We deliver around Metro Cebu and ship across the Philippines.",
    breadcrumb: "Visit Us",
  },
} satisfies Record<string, PageRecord>;
