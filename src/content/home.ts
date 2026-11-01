/**
 * home.ts — copy for the home page sections.
 * Voice: short sentences, everyday words, warm and calm.
 * (Section order lives in src/config/sections.ts.)
 */

export const hero = {
  eyebrow: "Perfume shop · Cebu City",
  titleStart: "Perfume made for",
  titleAccent: "Cebu",
  titleEnd: "days and nights",
  text: "Fresh scents for hot days. Rich scents for big nights. Order on Messenger and get it the same day in Metro Cebu.",
  primary: { label: "Shop the collection", href: "/shop" },
  secondaryLabel: "Order on Messenger",
  featured: ["sugbo-gold", "mactan-tide", "colon-street-oud"],
};

export const trustItems = [
  { icon: "truck", title: "Same-day delivery", text: "Metro Cebu, order before 3 PM" },
  { icon: "cash", title: "Cash on delivery", text: "Pay when it arrives" },
  { icon: "wallet", title: "GCash & Maya", text: "Or bank transfer" },
  { icon: "store", title: "Free store pickup", text: "Ready in about an hour" },
] as const;

export const collectionsSection = {
  label: "Collections",
  title: "Shop by mood",
  intro: "Not sure what to pick? Start with how you want to feel. Every scent sits in a mood, and in For Him or For Her.",
};

export const bestsellersSection = {
  label: "Best sellers",
  title: "The scents Cebu keeps coming back to",
  intro: "Our most-ordered scents. A good place to start if this is your first bottle.",
  cta: { label: "See all scents", href: "/shop" },
};

export const nightSection = {
  label: "After dark",
  title: "When the sun goes down",
  intro: "Warm, rich scents for dates, parties and city lights. One or two sprays is all you need.",
  picks: ["it-park-after-dark", "cebu-skyline", "fuente-noir", "sinulog-ember"],
  cta: { label: "Shop Night Out", href: "/collections/night-out" },
};

export const notesStrip = [
  "Bergamot",
  "Sea salt",
  "Sampaguita",
  "Mango",
  "Oud wood",
  "Vanilla",
  "Jasmine",
  "Coconut",
  "Cedar",
  "Black coffee",
  "Green tea",
  "Amber",
];

export const himHerSection = {
  label: "For him · For her",
  title: "Find your match",
  him: {
    title: "For Him",
    text: "Fresh citrus for the day. Wood, spice and leather for the night.",
    href: "/collections/for-him",
    bottle: "moalboal-blue",
  },
  her: {
    title: "For Her",
    text: "Clean musk and soft florals by day. Rose, coffee and vanilla by night.",
    href: "/collections/for-her",
    bottle: "parian-rose",
  },
};

export const howToOrder = {
  label: "How to order",
  title: "Ordering takes less than a minute",
  intro: "No account. No checkout form. Just a quick chat with a real person.",
  steps: [
    {
      title: "Pick your scent",
      text: "Browse by mood or by name. Read the notes to see how it smells.",
    },
    {
      title: "Tap “Order on Messenger”",
      text: "Your order message is ready, with the scent and size. Just press send.",
    },
    {
      title: "Pay and receive",
      text: "Pay cash on delivery, GCash or Maya. Same day in Metro Cebu.",
    },
  ],
};

export const storySection = {
  label: "Our story",
  title: "Made here, for life on the island",
  paragraphs: [
    "Hot days, long commutes, beach weekends and bright city nights. Most perfumes aren't made for that. Ours are.",
    "We blend each scent in small batches and test it in real Cebu weather. If it fades by lunch, it doesn't make the shelf.",
  ],
  cta: { label: "Read our story", href: "/about" },
  /** Numbers are counted from the content files, so they stay correct. */
  statLabels: {
    scents: "Original scents",
    collections: "Ways to browse",
    sameDay: "Cities with same-day delivery",
  },
};

export const deliverySection = {
  label: "Delivery & payment",
  title: "Local, fast and easy",
  intro: "We're based in Cebu City, so Metro Cebu gets the fastest service.",
  zones: [
    {
      title: "Metro Cebu",
      places: "Cebu City · Mandaue · Lapu-Lapu · Talisay",
      time: "Same day if you order before 3 PM",
      pay: "Cash on delivery, GCash, Maya",
    },
    {
      title: "Rest of Cebu",
      places: "Towns across the province",
      time: "1 to 2 days by courier",
      pay: "GCash, Maya, bank transfer",
    },
    {
      title: "Nationwide",
      places: "Anywhere in the Philippines",
      time: "3 to 7 days by courier",
      pay: "GCash, Maya, bank transfer",
    },
  ],
  pickup: "Prefer to pick it up? Choose store pickup in your message. It's free and usually ready in about an hour.",
  note: "Sample delivery times and fees for this concept store.",
};

export const contactSection = {
  label: "Get in touch",
  title: "Questions? Send us a message",
  intro: "Ask about a scent, a gift or a bulk order. We usually reply within a few minutes during opening hours.",
};
