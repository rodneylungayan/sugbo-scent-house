/**
 * site.ts — business facts used everywhere (header, footer, schema, share tags).
 * Voice: short sentences, everyday words, warm and calm.
 *
 * THIS IS A CONCEPT STORE. Every detail below is a safe placeholder.
 * Replace each TODO with the real client's details before going live.
 */

export type SiteInfo = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  lang: string;
  email: string;
  phone: string;
  phoneIntl: string;
  /** Messenger username, e.g. "sugboscenthouse" → m.me/sugboscenthouse */
  messengerUsername: string;
  address: { street: string; city: string; region: string; country: string };
  hours: { days: string; time: string }[];
  areasServed: string[];
  socials: { label: string; url: string }[];
  twitterHandle: string;
  /** Where every "Contact us" call to action points. Change it once here. */
  quotePath: string;
  foundingNote: string;
  /** Set by hand so pages stay fully static (no clock reads at build/run time). */
  copyrightYear: number;
};

export const site: SiteInfo = {
  name: "Sugbo Scent House",
  shortName: "Sugbo",
  tagline: "Perfume made for Cebu days and nights",
  description:
    "A local perfume house in Cebu City. Fresh scents for hot days, rich scents for big nights. Order on Messenger, with same-day delivery in Metro Cebu.",
  // TODO: replace with the real live domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sugbo-scent-house.vercel.app",
  locale: "en_PH",
  lang: "en-PH",
  // TODO: real email (this is a placeholder that is safe to show).
  email: "hello@example.com",
  // TODO: real mobile number.
  phone: "0917 000 0000",
  phoneIntl: "+639170000000",
  // TODO: the shop's real Messenger username.
  messengerUsername: "",
  address: {
    // TODO: real street address (left out on purpose for the concept).
    street: "",
    city: "Cebu City",
    region: "Cebu",
    country: "PH",
  },
  hours: [
    // TODO: real opening hours.
    { days: "Monday to Saturday", time: "10:00 AM – 8:00 PM" },
    { days: "Sunday", time: "12:00 NN – 6:00 PM" },
  ],
  areasServed: ["Cebu City", "Mandaue City", "Lapu-Lapu City", "Talisay City", "Philippines"],
  // TODO: real social pages (Facebook, Instagram, TikTok). Empty = hidden.
  socials: [],
  twitterHandle: "",
  quotePath: "/visit#contact",
  foundingNote: "Sugbo is the old name of Cebu, used long before the city had its modern name.",
  copyrightYear: 2026,
};

export const conceptNotice =
  "Concept preview: Sugbo Scent House is a sample perfume shop, made to show what your own store could look like.";
