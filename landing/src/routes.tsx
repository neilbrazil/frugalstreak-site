import type { ReactElement } from "react";
import { GUIDES } from "./data";
import { guideMeta, guidesIndexMeta, homeMeta, type PageMeta } from "./seo";
import Home from "./pages/Home";
import GuidesIndex from "./pages/GuidesIndex";
import GuidePage from "./pages/GuidePage";

export type Route = { meta: PageMeta; element: ReactElement };

/** privacy.html and terms.html are deliberately NOT routes. They ship verbatim
 *  from public/ so their URLs stay stable once they are registered against the
 *  App Store Connect listing and the RevenueCat paywall. Re-rendering them as
 *  /privacy/ and /terms/ would move URLs that other systems point at. */
export const ROUTES: Route[] = [
  { meta: homeMeta(), element: <Home /> },
  { meta: guidesIndexMeta(), element: <GuidesIndex /> },
  ...GUIDES.map((g) => ({
    meta: guideMeta(g),
    element: <GuidePage slug={g.slug} />,
  })),
];
