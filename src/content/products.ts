/**
 * products.ts — the sample scents.
 * Feeds: product cards, /products/[slug] pages, collection pages, sitemap, schema.
 *
 * ALL SCENTS ARE MADE UP for the concept. Names are original and use
 * Cebu places for a local feel. No real brand names, bottles or
 * "inspired by" lines — keep it that way for a real client too.
 * Prices are samples. The bottle colours below are product data
 * (drawn by <Bottle>), not brand colours.
 *
 * Voice: describe a scent like you'd tell a friend. Short and plain.
 */
import type { CollectionSlug } from "./collections";

export type Gender = "him" | "her" | "shared";
export type BottleShape = "tall" | "round" | "square" | "flask";
export type CapStyle = "gold" | "black" | "silver" | "wood";

export type Product = {
  slug: string;
  name: string;
  gender: Gender;
  /** The mood collection it belongs to (For Him / For Her come from gender) */
  mood: Extract<CollectionSlug, "daily-fresh" | "seductive" | "gym-and-sport" | "night-out">;
  moods: [string, string, string];
  notes: { top: string[]; heart: string[]; base: string[] };
  /** One short line for cards */
  short: string;
  /** Two or three sentences for the product page */
  story: string;
  wearIt: string;
  sizeMl: number;
  /** Sample price in pesos for the size above */
  price: number;
  bestseller?: boolean;
  bottle: { shape: BottleShape; liquid: string; cap: CapStyle; tint: string };
};

export const products: Product[] = [
  // ---------- Daily Fresh ----------
  {
    slug: "mactan-tide",
    name: "Mactan Tide",
    gender: "shared",
    mood: "daily-fresh",
    moods: ["Salty", "Bright", "Easy"],
    notes: { top: ["Bergamot", "Sea salt"], heart: ["Sage", "Water lily"], base: ["Driftwood", "Clean musk"] },
    short: "Sea breeze, citrus and warm driftwood.",
    story:
      "Mactan Tide smells like the first swim of the morning. Salty air and bright bergamot open it up, then soft driftwood keeps it calm for hours.",
    wearIt: "School, work, weekends by the sea",
    sizeMl: 50,
    price: 890,
    bestseller: true,
    bottle: { shape: "tall", liquid: "#9fc4cc", cap: "silver", tint: "#e3eef0" },
  },
  {
    slug: "lahug-morning",
    name: "Lahug Morning",
    gender: "him",
    mood: "daily-fresh",
    moods: ["Zesty", "Crisp", "Clean"],
    notes: { top: ["Grapefruit", "Mint"], heart: ["Lavender", "Green tea"], base: ["Cedar", "Vetiver"] },
    short: "Grapefruit, cool mint and clean cedar.",
    story:
      "A wake-up scent for busy days. Juicy grapefruit and mint feel cool on the skin, and cedar gives it a neat, put-together finish.",
    wearIt: "The office, classes, daytime meetings",
    sizeMl: 50,
    price: 790,
    bottle: { shape: "square", liquid: "#e9c57b", cap: "black", tint: "#f3ead6" },
  },
  {
    slug: "tops-breeze",
    name: "Tops Breeze",
    gender: "shared",
    mood: "daily-fresh",
    moods: ["Airy", "Green", "Calm"],
    notes: { top: ["Lemon", "Green tea"], heart: ["Fig leaf", "Neroli"], base: ["White musk", "Ambrette"] },
    short: "Lemon, green tea and soft white musk.",
    story:
      "Named after the cool air up in the hills above the city. Tops Breeze is light and green, like an open window on a warm afternoon.",
    wearIt: "Everyday, long drives, lazy Sundays",
    sizeMl: 50,
    price: 750,
    bottle: { shape: "round", liquid: "#cfe0b4", cap: "wood", tint: "#edf1e2" },
  },
  {
    slug: "bantayan-linen",
    name: "Bantayan Linen",
    gender: "her",
    mood: "daily-fresh",
    moods: ["Soft", "Clean", "Gentle"],
    notes: { top: ["Pear", "Mandarin"], heart: ["White flowers", "Cotton"], base: ["Clean musk", "Soft wood"] },
    short: "Fresh pear, white flowers and clean cotton.",
    story:
      "Like sheets drying in the island sun. Bantayan Linen is soft and fresh, with juicy pear on top and a clean musk that sits close to the skin.",
    wearIt: "Work, brunch, after a shower",
    sizeMl: 50,
    price: 850,
    bestseller: true,
    bottle: { shape: "flask", liquid: "#f1dcd6", cap: "gold", tint: "#f7ecea" },
  },

  // ---------- Seductive ----------
  {
    slug: "colon-street-oud",
    name: "Colon Street Oud",
    gender: "shared",
    mood: "seductive",
    moods: ["Smoky", "Rich", "Deep"],
    notes: { top: ["Saffron", "Pink pepper"], heart: ["Oud wood", "Rose"], base: ["Leather", "Amber"] },
    short: "Saffron, smoky oud and soft leather.",
    story:
      "Named after one of the oldest streets in the country. It's deep and a little smoky, with warm saffron and a leather finish that lasts into the next day.",
    wearIt: "Formal dinners, cool nights, big moments",
    sizeMl: 50,
    price: 1490,
    bestseller: true,
    bottle: { shape: "square", liquid: "#6b3a22", cap: "gold", tint: "#eadfd3" },
  },
  {
    slug: "sinulog-ember",
    name: "Sinulog Ember",
    gender: "him",
    mood: "seductive",
    moods: ["Spicy", "Sweet", "Warm"],
    notes: { top: ["Cinnamon", "Cardamom"], heart: ["Tobacco leaf", "Clove"], base: ["Vanilla", "Tonka bean"] },
    short: "Cinnamon, tobacco leaf and vanilla.",
    story:
      "Warm and full of energy, like a festival night. Cinnamon and cardamom give it a kick, and creamy vanilla keeps it smooth.",
    wearIt: "Dates, parties, December nights",
    sizeMl: 50,
    price: 1190,
    bottle: { shape: "tall", liquid: "#b9662b", cap: "black", tint: "#f0e3d6" },
  },
  {
    slug: "parian-rose",
    name: "Parian Rose",
    gender: "her",
    mood: "seductive",
    moods: ["Romantic", "Lush", "Elegant"],
    notes: { top: ["Lychee", "Pink pepper"], heart: ["Damask rose", "Peony"], base: ["Patchouli", "Musk"] },
    short: "Lychee, deep rose and soft patchouli.",
    story:
      "A romantic rose with a juicy lychee start. Named after the old heritage district, it feels classic but never old-fashioned.",
    wearIt: "Date nights, weddings, anniversaries",
    sizeMl: 50,
    price: 1290,
    bestseller: true,
    bottle: { shape: "round", liquid: "#d98a96", cap: "gold", tint: "#f6e4e4" },
  },
  {
    slug: "fuente-noir",
    name: "Fuente Noir",
    gender: "her",
    mood: "seductive",
    moods: ["Dark", "Sweet", "Addictive"],
    notes: { top: ["Coffee", "Pear"], heart: ["Jasmine", "Orange blossom"], base: ["Vanilla", "Patchouli"] },
    short: "Black coffee, white flowers and vanilla.",
    story:
      "Dark roasted coffee meets soft white flowers. Fuente Noir is sweet, bold and hard to forget. People will ask what you're wearing.",
    wearIt: "Nights out, dinners, cool evenings",
    sizeMl: 50,
    price: 1290,
    bottle: { shape: "flask", liquid: "#3b2a26", cap: "black", tint: "#ece2dc" },
  },

  // ---------- Gym & Sport ----------
  {
    slug: "osmena-peak-rush",
    name: "Osmeña Peak Rush",
    gender: "him",
    mood: "gym-and-sport",
    moods: ["Cool", "Sharp", "Active"],
    notes: { top: ["Ginger", "Lime"], heart: ["Sea notes", "Juniper"], base: ["Vetiver", "Cedar"] },
    short: "Zingy ginger, cool sea air and vetiver.",
    story:
      "Made for the climb. Ginger and lime give a quick jolt, sea notes keep it cool, and vetiver gives it an earthy, outdoor finish.",
    wearIt: "Gym, hikes, basketball after work",
    sizeMl: 50,
    price: 790,
    bestseller: true,
    bottle: { shape: "tall", liquid: "#7fb2c9", cap: "black", tint: "#e2edf1" },
  },
  {
    slug: "kawasan-splash",
    name: "Kawasan Splash",
    gender: "shared",
    mood: "gym-and-sport",
    moods: ["Juicy", "Cool", "Fresh"],
    notes: { top: ["Green apple", "Cucumber"], heart: ["Mint", "Water notes"], base: ["Clean musk", "Light wood"] },
    short: "Green apple, cucumber and cool mint.",
    story:
      "Like jumping into cold, clear water. Kawasan Splash is crisp and juicy, and it stays fresh even on the hottest afternoon.",
    wearIt: "Workouts, beach days, summer",
    sizeMl: 50,
    price: 690,
    bestseller: true,
    bottle: { shape: "round", liquid: "#a9d8c4", cap: "silver", tint: "#e5f2ec" },
  },
  {
    slug: "moalboal-blue",
    name: "Moalboal Blue",
    gender: "him",
    mood: "gym-and-sport",
    moods: ["Marine", "Crisp", "Bold"],
    notes: { top: ["Lime", "Sea spray"], heart: ["Rosemary", "Geranium"], base: ["Mineral notes", "Amber wood"] },
    short: "Lime, sea spray and warm amber wood.",
    story:
      "Deep blue and full of energy, like a dive into a sardine run. Bright on top and steady underneath, it works from the gym to dinner.",
    wearIt: "Sport, travel, casual nights",
    sizeMl: 50,
    price: 890,
    bottle: { shape: "square", liquid: "#2f5f8a", cap: "silver", tint: "#e0e8ef" },
  },
  {
    slug: "busay-green",
    name: "Busay Green",
    gender: "shared",
    mood: "gym-and-sport",
    moods: ["Herbal", "Earthy", "Clean"],
    notes: { top: ["Basil", "Bergamot"], heart: ["Fig leaf", "Green tea"], base: ["Cedar", "Oakmoss"] },
    short: "Fresh basil, fig leaf and cedar.",
    story:
      "Smells like the cool green hills above the city after rain. Herbal and clean, with a soft woody base that never feels heavy.",
    wearIt: "Morning runs, yoga, weekends",
    sizeMl: 50,
    price: 750,
    bottle: { shape: "flask", liquid: "#8fae7a", cap: "wood", tint: "#e8eee0" },
  },

  // ---------- Night Out ----------
  {
    slug: "it-park-after-dark",
    name: "IT Park After Dark",
    gender: "him",
    mood: "night-out",
    moods: ["Smooth", "Spicy", "Magnetic"],
    notes: { top: ["Black pepper", "Bergamot"], heart: ["Lavender", "Iris"], base: ["Amber", "Tonka bean"] },
    short: "Black pepper, lavender and warm amber.",
    story:
      "For when the city lights come on. Peppery and smooth, with a warm amber trail that people notice as you walk past.",
    wearIt: "Bars, parties, late dinners",
    sizeMl: 50,
    price: 1190,
    bestseller: true,
    bottle: { shape: "tall", liquid: "#2a2f4a", cap: "gold", tint: "#e4e2ea" },
  },
  {
    slug: "cebu-skyline",
    name: "Cebu Skyline",
    gender: "shared",
    mood: "night-out",
    moods: ["Mysterious", "Velvety", "Warm"],
    notes: { top: ["Plum", "Saffron"], heart: ["Incense", "Rose"], base: ["Sandalwood", "Vanilla"] },
    short: "Dark plum, soft incense and sandalwood.",
    story:
      "A smooth, velvety scent for city nights. Dark plum opens it up, and creamy sandalwood stays on the skin until morning.",
    wearIt: "Rooftop bars, events, special nights",
    sizeMl: 50,
    price: 1390,
    bottle: { shape: "square", liquid: "#5b2a45", cap: "gold", tint: "#ece0e6" },
  },
  {
    slug: "malapascua-moon",
    name: "Malapascua Moon",
    gender: "her",
    mood: "night-out",
    moods: ["Creamy", "Floral", "Glowing"],
    notes: { top: ["Coconut", "Mandarin"], heart: ["Jasmine", "Tiare flower"], base: ["Vanilla", "Soft musk"] },
    short: "Coconut, night jasmine and vanilla musk.",
    story:
      "An island night in a bottle. Soft coconut and jasmine glow on warm skin, with a creamy vanilla finish.",
    wearIt: "Beach dinners, parties, holidays",
    sizeMl: 50,
    price: 1190,
    bottle: { shape: "round", liquid: "#efe0c2", cap: "gold", tint: "#f6efe2" },
  },
  {
    slug: "sugbo-gold",
    name: "Sugbo Gold",
    gender: "her",
    mood: "night-out",
    moods: ["Sunny", "Luxurious", "Sweet"],
    notes: { top: ["Mango", "Pink grapefruit"], heart: ["Orange blossom", "Sampaguita"], base: ["Tonka bean", "Amber"] },
    short: "Ripe mango, sampaguita and golden amber.",
    story:
      "Our house signature. Sweet mango and sampaguita, the national flower, sit on a warm golden base. It's bright, happy and made for celebrating.",
    wearIt: "Birthdays, nights out, any time you want to shine",
    sizeMl: 50,
    price: 1390,
    bestseller: true,
    bottle: { shape: "flask", liquid: "#e2a93b", cap: "gold", tint: "#f6ebd3" },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

/** Products in a collection. For Him / For Her include shared scents. */
export function productsIn(slug: CollectionSlug): Product[] {
  if (slug === "for-him") return products.filter((p) => p.gender !== "her");
  if (slug === "for-her") return products.filter((p) => p.gender !== "him");
  return products.filter((p) => p.mood === slug);
}

export function collectionsFor(product: Product): CollectionSlug[] {
  const list: CollectionSlug[] = [product.mood];
  if (product.gender !== "her") list.push("for-him");
  if (product.gender !== "him") list.push("for-her");
  return list;
}

export const genderLabel: Record<Gender, string> = {
  him: "For him",
  her: "For her",
  shared: "For everyone",
};
