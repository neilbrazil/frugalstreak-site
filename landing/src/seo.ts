import {
  APP,
  guidePath,
  homePath,
  LOCALES,
  type Content,
  type Guide,
  type Lang,
} from "./content";
import { abs, APP_LIVE, APP_STORE_URL, SITE } from "./site";

export type PageMeta = {
  path: string;
  lang: Lang;
  ogLocale: string;
  title: string;
  description: string;
  image: string;
  /** ISO date; the sitemap lastmod. */
  updated: string;
  /** hreflang alternates, including the page itself. Only pages that are
   *  genuine translations of each other carry them: the home pages. Each
   *  language's guides are written for that market, not translated, so they
   *  have none. */
  alternates: { hreflang: string; path: string }[];
  jsonld: unknown[];
};

const ogImage = (c: Content) => abs(`assets/og-${c.lang}.png`);
const shotUrl = (c: Content, file: string) =>
  abs(`assets/shots/${c.lang}/${file}.webp`);

const faqPage = (entries: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: entries.map((e) => ({
    "@type": "Question",
    name: e.q,
    acceptedAnswer: { "@type": "Answer", text: e.a },
  })),
});

const breadcrumbs = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    item: abs(t.path),
  })),
});

const homeAlternates = () => [
  ...LOCALES.map((l) => ({ hreflang: l.lang, path: homePath(l) })),
  { hreflang: "x-default", path: "/" },
];

export const softwareApplication = (c: Content) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: APP.fullName,
  alternateName: APP.name,
  description: c.meta.description,
  inLanguage: c.lang,
  applicationCategory: "FinanceApplication",
  operatingSystem: APP.minOS + " or later",
  url: abs(homePath(c)),
  ...(APP_LIVE ? { installUrl: APP_STORE_URL } : {}),
  screenshot: [c.hero.shot, ...c.gallery.shots].map((s) => shotUrl(c, s.file)),
  // aggregateRating is deliberately omitted: rating markup has to reflect
  // reviews shown on the page, and this page shows none.
  author: { "@type": "Person", name: APP.author },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

const website = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: APP.fullName,
  url: SITE + "/",
});

export const homeMeta = (c: Content): PageMeta => ({
  path: homePath(c),
  lang: c.lang,
  ogLocale: c.ogLocale,
  title: c.meta.title,
  description: c.meta.description,
  image: ogImage(c),
  updated: c.updated,
  alternates: homeAlternates(),
  jsonld: [
    softwareApplication(c),
    ...(c.lang === "en" ? [website()] : []),
    faqPage(c.faq),
  ],
});

export const guidesIndexMeta = (c: Content): PageMeta => ({
  path: "/guides/",
  lang: c.lang,
  ogLocale: c.ogLocale,
  title: "No-Spend Challenge Guides — FrugalStreak",
  description:
    "Practical guides to running a no-spend challenge: setting the rules, deciding what counts, no-spend January, a free calendar, and restarting after you slip.",
  image: ogImage(c),
  updated: c.guides.map((g) => g.updated).sort().at(-1)!,
  alternates: [],
  jsonld: [
    breadcrumbs([
      { name: c.ui.home, path: "/" },
      { name: c.ui.navGuides, path: "/guides/" },
    ]),
  ],
});

export const guideMeta = (c: Content, g: Guide): PageMeta => {
  const path = guidePath(c, g.slug);
  // Only English has a guides index, so the other languages' trail skips it.
  const trail =
    c.lang === "en"
      ? [
          { name: c.ui.home, path: "/" },
          { name: c.ui.navGuides, path: "/guides/" },
          { name: g.title, path },
        ]
      : [
          { name: c.ui.home, path: homePath(c) },
          { name: g.title, path },
        ];
  return {
    path,
    lang: c.lang,
    ogLocale: c.ogLocale,
    title: `${g.metaTitle} — FrugalStreak`,
    description: g.description,
    image: ogImage(c),
    updated: g.updated,
    alternates: [],
    jsonld: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: g.title,
        description: g.description,
        inLanguage: c.lang,
        image: ogImage(c),
        datePublished: g.published,
        dateModified: g.updated,
        author: { "@type": "Person", name: APP.author },
        publisher: { "@type": "Person", name: APP.author },
        mainEntityOfPage: abs(path),
      },
      breadcrumbs(trail),
      // Each guide carries its own questions, deliberately distinct from the
      // home FAQ so no Q/A is marked up on two pages at once.
      faqPage(g.faq),
    ],
  };
};
