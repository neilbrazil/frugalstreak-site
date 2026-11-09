/** The shape every language's content file fills in. Pages are dumb; the
 *  content files are the copy. A language that ships fewer pages (the
 *  translations carry one guide each) still fills in every UI string, so no
 *  page can fall back to English mid-sentence. */

export type Lang = "en" | "de" | "fr" | "es";

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  sections: { h: string; p: string[] }[];
  faq: { q: string; a: string }[];
  takeaway: string;
  related: string[];
  /** ISO dates. `updated` drives the sitemap lastmod and dateModified. */
  published: string;
  updated: string;
  /** A downloadable printable offered inside the guide, if it has one. */
  printable?: { file: string; label: string };
};

/** A real screenshot from the shipping app. `file` names a WebP in
 *  public/assets/shots/<lang>/, written by scripts/assets.mjs. */
export type Shot = { file: string; alt: string; caption: string };

export type Content = {
  lang: Lang;
  /** Open Graph locale, e.g. en_US. */
  ogLocale: string;
  /** The language's name in itself, for the language switcher. */
  langName: string;
  /** Path prefix under the site base: "" for English, "de/" and so on. */
  prefix: string;
  /** ISO date of the last content change to this language's home page. */
  updated: string;

  app: { tagline: string; price: string };
  meta: { title: string; description: string };
  hero: { h1: string; sub: string; shot: Shot };
  gallery: { h: string; shots: Shot[] };
  features: { h: string; p: string }[];
  pro: { h: string; p: string; points: string[]; pricing: string };
  faq: { q: string; a: string }[];
  guides: Guide[];

  ui: {
    navFeatures: string;
    navGuides: string;
    navFaq: string;
    download: string;
    /** "{app}" is replaced with the app name. */
    downloadAria: string;
    metaLine: string;
    featuresH: string;
    guidesH: string;
    guidesLede: string;
    faqH: string;
    guideFaqH: string;
    readNext: string;
    callout: string;
    ctaH: string;
    ctaLede: string;
    home: string;
    privacy: string;
    terms: string;
    support: string;
    madeBy: string;
    notAffiliated: string;
    moreApps: string;
    languages: string;
    breadcrumb: string;
    updated: string;
  };
};
