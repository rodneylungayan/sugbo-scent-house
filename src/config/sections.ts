/**
 * sections.ts — the ordered list of home page sections.
 * To reorder, add or remove a section, edit this list only.
 * `numbered: true` gives the section a "01 / Label" counter.
 */
import type { ComponentType } from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CollectionsGrid } from "@/components/sections/CollectionsGrid";
import { BestSellers } from "@/components/sections/BestSellers";
import { NightBand } from "@/components/sections/NightBand";
import { NotesMarquee } from "@/components/sections/NotesMarquee";
import { HimHer } from "@/components/sections/HimHer";
import { HowToOrder } from "@/components/sections/HowToOrder";
import { Story } from "@/components/sections/Story";
import { Delivery } from "@/components/sections/Delivery";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { Contact } from "@/components/sections/Contact";

export type HomeSection = {
  id: string;
  Component: ComponentType<{ index?: number }>;
  enabled: boolean;
  numbered: boolean;
};

export const homeSections: HomeSection[] = [
  { id: "hero", Component: Hero, enabled: true, numbered: false },
  { id: "trust", Component: TrustStrip, enabled: true, numbered: false },
  { id: "collections", Component: CollectionsGrid, enabled: true, numbered: true },
  { id: "best-sellers", Component: BestSellers, enabled: true, numbered: true },
  { id: "after-dark", Component: NightBand, enabled: true, numbered: true },
  { id: "notes", Component: NotesMarquee, enabled: true, numbered: false },
  { id: "him-her", Component: HimHer, enabled: true, numbered: true },
  { id: "order", Component: HowToOrder, enabled: true, numbered: true },
  { id: "story", Component: Story, enabled: true, numbered: true },
  { id: "delivery", Component: Delivery, enabled: true, numbered: true },
  { id: "faq", Component: HomeFaq, enabled: true, numbered: true },
  { id: "contact", Component: Contact, enabled: true, numbered: true },
];
