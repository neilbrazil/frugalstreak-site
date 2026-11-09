import type { ReactElement } from "react";
import { LOCALES } from "./content";
import { guideMeta, guidesIndexMeta, homeMeta, type PageMeta } from "./seo";
import Home from "./pages/Home";
import GuidesIndex from "./pages/GuidesIndex";
import GuidePage from "./pages/GuidePage";

export type Route = { meta: PageMeta; element: ReactElement };

/** privacy.html and terms.html are deliberately NOT routes. They ship verbatim
 *  from public/ so their URLs stay stable once they are registered against the
 *  App Store Connect listing and the RevenueCat paywall. Re-rendering them as
 *  /privacy/ and /terms/ would move URLs that other systems point at. */
export const ROUTES: Route[] = LOCALES.flatMap((c) => [
  { meta: homeMeta(c), element: <Home c={c} /> },
  ...(c.lang === "en"
    ? [{ meta: guidesIndexMeta(c), element: <GuidesIndex c={c} /> }]
    : []),
  ...c.guides.map((g) => ({
    meta: guideMeta(c, g),
    element: <GuidePage c={c} slug={g.slug} />,
  })),
]);
