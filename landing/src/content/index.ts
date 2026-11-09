import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import type { Content, Guide } from "./types";

export type { Content, Guide, Lang, Shot } from "./types";

/** English first: it is the x-default and the only language with a guides
 *  index. */
export const LOCALES: Content[] = [en, de, fr, es];

export const APP = {
  name: "FrugalStreak",
  fullName: "FrugalStreak — No Spend Tracker",
  author: "Neil Brazil",
  minOS: "iOS 18",
};

export const homePath = (c: Content) => "/" + c.prefix;
export const guidePath = (c: Content, slug: string) =>
  `/${c.prefix}guides/${slug}/`;

export const guideBySlug = (c: Content, slug: string): Guide => {
  const g = c.guides.find((x) => x.slug === slug);
  if (!g) throw new Error(`${c.lang}: no guide "${slug}"`);
  return g;
};

/** Newest first. Array.prototype.sort is stable, so guides published on the
 *  same day keep their written order. */
export const guidesNewestFirst = (c: Content) =>
  [...c.guides].sort((a, b) => b.published.localeCompare(a.published));

/** Fill "{app}" and "{author}" in a UI string. */
export const fill = (s: string) =>
  s.replace("{app}", APP.name).replace("{author}", APP.author);
