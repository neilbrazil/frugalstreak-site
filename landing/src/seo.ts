import { APP, FAQ, type Guide } from "./data";
import { abs, APP_LIVE, APP_STORE_URL, SITE } from "./site";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  image: string;
  jsonld: unknown[];
};

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

export const softwareApplication = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: APP.fullName,
  alternateName: APP.name,
  applicationCategory: "FinanceApplication",
  operatingSystem: APP.minOS + " or later",
  url: SITE + "/",
  // installUrl is omitted until the app is actually on sale: pointing schema
  // at a URL that 404s is worse than omitting the field.
  ...(APP_LIVE ? { installUrl: APP_STORE_URL } : {}),
  // aggregateRating is deliberately omitted — an unreleased app has no ratings
  // to mark up, and thin rating markup is discounted anyway.
  author: { "@type": "Person", name: APP.author },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free download. An optional one-time $2.99 unlock adds the full streak history and custom widget colours.",
  },
});

const website = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: APP.fullName,
  url: SITE + "/",
});

export const homeMeta = (): PageMeta => ({
  path: "/",
  title: "FrugalStreak — No Spend Tracker for iPhone",
  description:
    "Track no-spend days with one tap from your Home Screen. No budget to build and no bank account to link. Free on iPhone, and it works offline.",
  image: abs("assets/icon.png"),
  jsonld: [softwareApplication(), website(), faqPage(FAQ)],
});

export const guidesIndexMeta = (): PageMeta => ({
  path: "/guides/",
  title: "No-Spend Challenge Guides — FrugalStreak",
  description:
    "Practical guides to running a no-spend challenge: setting the rules, deciding what counts, tracking days on an iPhone, and restarting after you slip.",
  image: abs("assets/icon.png"),
  jsonld: [
    breadcrumbs([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides/" },
    ]),
  ],
});

export const guideMeta = (g: Guide): PageMeta => ({
  path: `/guides/${g.slug}/`,
  title: `${g.metaTitle} — FrugalStreak`,
  description: g.description,
  image: abs("assets/icon.png"),
  jsonld: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: g.title,
      description: g.description,
      author: { "@type": "Person", name: APP.author },
      publisher: { "@type": "Person", name: APP.author },
      mainEntityOfPage: abs(`/guides/${g.slug}/`),
    },
    breadcrumbs([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides/" },
      { name: g.title, path: `/guides/${g.slug}/` },
    ]),
    // Each guide carries its own two questions. They are deliberately distinct
    // from the homepage FAQ so no Q/A is marked up on two pages at once.
    faqPage(g.faq),
  ],
});
