/**
 * collections.ts — the six ways shoppers can browse.
 * Feeds: home "Shop by collection", /collections/[slug] pages, the sitemap,
 * menus and share images. Each collection owns ONE focus keyphrase.
 * Voice: short, plain, friendly. Explain scents the way you'd tell a friend.
 */
import type { Faq } from "./faqs";

export type CollectionSlug =
  | "daily-fresh"
  | "seductive"
  | "gym-and-sport"
  | "night-out"
  | "for-him"
  | "for-her";

export type Collection = {
  slug: CollectionSlug;
  name: string;
  /** Three mood words shown under the name */
  moods: [string, string, string];
  /** One line under the moods */
  line: string;
  /** First sentence on the collection page, carries the focus keyphrase */
  keyLine: string;
  /** Longer intro for the collection page */
  intro: string;
  /** "night" uses the dark gold look */
  tone: "light" | "night";
  /** Two colours for the card background (data, not brand colours) */
  gradient: [string, string];
  seo: { title: string; description: string; keyphrase: string };
  faqs: Faq[];
};

export const collections: Collection[] = [
  {
    slug: "daily-fresh",
    name: "Daily Fresh",
    moods: ["Light", "Clean", "Easy"],
    line: "Scents for school, work and long commutes.",
    keyLine: "Everyday fresh perfume, made for the Philippine heat.",
    intro:
      "These are the scents you can wear every day without thinking twice. They smell clean and bright, they don't fill a room, and they stay pleasant in the heat.",
    tone: "light",
    gradient: ["#dfeaec", "#f6f1e8"],
    seo: {
      title: "Everyday Fresh Perfume in the Philippines",
      description:
        "Light, clean perfumes you can wear every day, even in the heat. Shop the Daily Fresh collection and order on Messenger.",
      keyphrase: "everyday fresh perfume Philippines",
    },
    faqs: [
      {
        q: "Is a fresh perfume okay for the office?",
        a: "Yes. Fresh scents are soft and polite. People near you notice them, but they won't fill the whole room.",
      },
      {
        q: "How many sprays should I use for daytime?",
        a: "Two or three sprays is plenty. Try one on the neck and one on each wrist.",
      },
    ],
  },
  {
    slug: "seductive",
    name: "Seductive",
    moods: ["Bold", "Warm", "Confident"],
    line: "For dates and nights you want to remember.",
    keyLine: "Long-lasting date night perfume for big moments.",
    intro:
      "Rich, warm scents with spice, vanilla and wood. They stay close to the skin and last a long time. Save them for dinners, dates and special nights.",
    tone: "night",
    gradient: ["#3a2418", "#14110d"],
    seo: {
      title: "Long-Lasting Date Night Perfume",
      description:
        "Warm, rich perfumes made for dates and special nights. Spice, vanilla and wood that last. Shop the Seductive collection.",
      keyphrase: "long lasting date night perfume",
    },
    faqs: [
      {
        q: "Are these scents too strong for the day?",
        a: "They are rich, so one or two sprays is enough. In the day, spray once on the chest under your shirt.",
      },
      {
        q: "Why do warm scents last longer?",
        a: "Notes like vanilla, wood and amber are heavy, so they fade slowly. Light citrus notes fade faster.",
      },
    ],
  },
  {
    slug: "gym-and-sport",
    name: "Gym & Sport",
    moods: ["Fresh", "Cool", "Energising"],
    line: "Scents that keep up when you move.",
    keyLine: "Fresh sport perfume for the gym, the court and the beach.",
    intro:
      "Cool, sporty scents for the gym, the court or a beach run. They feel like a cold shower in a bottle and stay fresh even when you sweat.",
    tone: "light",
    gradient: ["#d9e4e8", "#eef3f4"],
    seo: {
      title: "Fresh Sport Perfume for the Gym",
      description:
        "Cool, clean perfumes that stay fresh when you move and sweat. Shop the Gym & Sport collection, made for Cebu heat.",
      keyphrase: "fresh sport perfume for gym",
    },
    faqs: [
      {
        q: "Should I spray before or after a workout?",
        a: "After a shower is best. A light spray before training is fine too. Keep it to one or two sprays.",
      },
      {
        q: "Will a sport scent clash with my deodorant?",
        a: "Pick an unscented or lightly scented deodorant and the perfume will stay clear.",
      },
    ],
  },
  {
    slug: "night-out",
    name: "Night Out",
    moods: ["Alluring", "Evening", "Smooth"],
    line: "For bars, parties and city lights.",
    keyLine: "Evening perfume for men and women who love a night out.",
    intro:
      "Smooth evening scents with pepper, plum, incense and soft sweetness. Made for parties, bars and late dinners around the city.",
    tone: "night",
    gradient: ["#2b2433", "#14110d"],
    seo: {
      title: "Evening Perfume for Men and Women",
      description:
        "Smooth evening perfumes for parties and late nights in the city. Shop the Night Out collection for him and for her.",
      keyphrase: "evening perfume for men and women",
    },
    faqs: [
      {
        q: "Can men and women wear the same night scent?",
        a: "Yes. Many evening scents are shared. Wear what you like. The skin changes how a perfume smells on each person.",
      },
      {
        q: "Where should I spray for a night out?",
        a: "Spray the neck and behind the ears. Body heat there helps the scent rise when you move.",
      },
    ],
  },
  {
    slug: "for-him",
    name: "For Him",
    moods: ["Clean", "Woody", "Sharp"],
    line: "From fresh citrus to deep wood and leather.",
    keyLine: "Men's perfume made in Cebu, from fresh to bold.",
    intro:
      "Every scent made with men in mind, plus our shared scents that suit anyone. Start fresh for the day or go deep for the night.",
    tone: "light",
    gradient: ["#e4ddd0", "#f6f1e8"],
    seo: {
      title: "Men's Perfume in Cebu",
      description:
        "Fresh, woody and bold perfumes for men, made in Cebu. Same-day delivery in Metro Cebu. Order on Messenger.",
      keyphrase: "men's perfume Cebu",
    },
    faqs: [
      {
        q: "What is a good first perfume for a man?",
        a: "Start with a fresh, clean scent. It suits school, work and weekends, so you'll wear it often.",
      },
      {
        q: "Can I give one as a gift?",
        a: "Yes. Tell us on Messenger and we'll wrap it and add a short note for free.",
      },
    ],
  },
  {
    slug: "for-her",
    name: "For Her",
    moods: ["Soft", "Floral", "Radiant"],
    line: "From clean musk to rose, jasmine and vanilla.",
    keyLine: "Women's perfume made in Cebu, from soft to sweet.",
    intro:
      "Every scent made with women in mind, plus our shared scents. Soft and clean for the day, rich and floral for the night.",
    tone: "light",
    gradient: ["#f1e2dd", "#f6f1e8"],
    seo: {
      title: "Women's Perfume in Cebu",
      description:
        "Soft, floral and sweet perfumes for women, made in Cebu. Same-day delivery in Metro Cebu. Order on Messenger.",
      keyphrase: "women's perfume Cebu",
    },
    faqs: [
      {
        q: "Which scent is best for everyday wear?",
        a: "Try a clean musk or a light floral. They feel soft and fresh, and they suit most places.",
      },
      {
        q: "Will the scent smell the same on me?",
        a: "Close, but not exactly. Your skin adds its own warmth. That is why the same perfume feels personal.",
      },
    ],
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
