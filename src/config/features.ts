/**
 * features.ts — on/off switchboard. Flip a flag here to turn a module
 * on or off without touching any component.
 * (Vercel Analytics and Speed Insights are always on — not a flag.)
 */
export type Theme = "cream" | "noir" | "blush" | "sea";
export type MotionLevel = "off" | "subtle" | "full";

export const features = {
  /** Shows the "Concept preview" bar and turns "Order on Messenger"
   *  into a preview pop-up instead of opening Messenger.
   *  Set to false for a real client shop. */
  conceptMode: true,
  /** false = every page says "noindex" so Google won't list it.
   *  Set to true when this becomes a real, live shop. */
  indexable: false,
  theme: "cream" as Theme,
  motion: "subtle" as MotionLevel,
  announcementBar: true,
  mobileCtaBar: true,
  backToTop: true,
  customCursor: false,
  blog: false,
  search: false,
  extraAnalytics: false,
} as const;
