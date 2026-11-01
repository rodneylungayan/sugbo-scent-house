/**
 * navigation.ts — the single list of pages and menu links.
 * Feeds: header, mobile menu, footer and sitemap.xml.
 * Add a page here once and it shows up everywhere.
 * (Collection and product pages are added to the sitemap from their own content files.)
 */
import type { MetadataRoute } from "next";

export type NavItem = {
  label: string;
  path: string;
  inHeader: boolean;
  inFooter: boolean;
  inSitemap: boolean;
  priority?: number;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
};

export const navigation: NavItem[] = [
  { label: "Home", path: "/", inHeader: false, inFooter: true, inSitemap: true, priority: 1, changeFrequency: "weekly" },
  { label: "Shop All", path: "/shop", inHeader: true, inFooter: true, inSitemap: true, priority: 0.9, changeFrequency: "weekly" },
  { label: "Collections", path: "/#collections", inHeader: true, inFooter: false, inSitemap: false },
  { label: "For Him", path: "/collections/for-him", inHeader: true, inFooter: false, inSitemap: false },
  { label: "For Her", path: "/collections/for-her", inHeader: true, inFooter: false, inSitemap: false },
  { label: "About", path: "/about", inHeader: true, inFooter: true, inSitemap: true, priority: 0.6, changeFrequency: "monthly" },
  { label: "Visit Us", path: "/visit", inHeader: true, inFooter: true, inSitemap: true, priority: 0.7, changeFrequency: "monthly" },
];

export const headerNav = navigation.filter((n) => n.inHeader);
export const footerNav = navigation.filter((n) => n.inFooter);
