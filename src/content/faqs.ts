/**
 * faqs.ts — questions for the home, shop, about and visit pages.
 * Rule: every page has its own questions. Never repeat one across pages.
 * Voice: plain English, one idea per sentence.
 */
export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: "How do I order?",
    a: "Tap \"Order on Messenger\" on any scent. A message with the scent and size is ready for you. Send it, and we reply with the total and delivery time.",
  },
  {
    q: "Do you deliver the same day?",
    a: "Yes, within Metro Cebu: Cebu City, Mandaue, Lapu-Lapu and Talisay. Order before 3 PM and a courier brings it the same day.",
  },
  {
    q: "Can I pay cash when it arrives?",
    a: "Yes. Cash on delivery works in Metro Cebu. You can also pay by GCash, Maya or bank transfer.",
  },
  {
    q: "Do you ship outside Cebu?",
    a: "Yes, anywhere in the Philippines. Most orders arrive in 3 to 7 days, paid ahead by GCash, Maya or bank transfer.",
  },
  {
    q: "Will these scents last in hot weather?",
    a: "Our perfumes are made as eau de parfum, which is stronger than a body spray. Spray on skin, not clothes, and keep the bottle out of the sun.",
  },
];

export const shopFaqs: Faq[] = [
  {
    q: "What does \"eau de parfum\" mean?",
    a: "It's a perfume strength. It has more scent oil than a body mist or cologne, so it lasts longer on the skin.",
  },
  {
    q: "How do I pick a scent online?",
    a: "Read the notes. Top notes are what you smell first. Heart notes come next. Base notes are what stay for hours.",
  },
];

export const aboutFaqs: Faq[] = [
  {
    q: "Where does the name Sugbo come from?",
    a: "Sugbo is the old name of Cebu. We use it because our scents are made here, for life on the island.",
  },
  {
    q: "Are your scents copies of famous brands?",
    a: "No. Every scent has its own name and its own blend. We don't use or copy any brand's name or bottle.",
  },
];

export const visitFaqs: Faq[] = [
  {
    q: "Can I pick up my order myself?",
    a: "Yes. Choose store pickup in your Messenger order. We'll tell you when it's ready, usually within the hour.",
  },
  {
    q: "Can I smell the scents before buying?",
    a: "Yes. Visit the shop during opening hours and try any scent on a paper strip or on your skin.",
  },
  {
    q: "What's the fastest way to reach you?",
    a: "Messenger. We reply during opening hours, usually within a few minutes.",
  },
];
