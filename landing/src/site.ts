/** Deployment constants. The site is a GitHub Pages project page, so every
 *  site-absolute path carries the `/frugalstreak-site/` prefix. */
export const ORIGIN = "https://neilbrazil.github.io";
export const BASE = "/frugalstreak-site/";
export const SITE = ORIGIN + BASE.replace(/\/$/, "");

export const APP_ID = "6807068958";
export const APP_STORE_URL =
  "https://apps.apple.com/app/apple-store/id6807068958";
export const SUPPORT_EMAIL = "neilbrazil83+apps@gmail.com";

/** Live on the App Store since 2026-09-09 (1.0, READY_FOR_SALE). While this was
 *  false the page showed a "coming soon" note rather than a link that 404s, and
 *  emitted no app-store deep link or `apple-itunes-app` banner. Now true, so the
 *  CTA, the smart banner and the JSON-LD `installUrl` all point at the store. */
export const APP_LIVE = true;

/** Google Search Console site-verification token. Google only reads this on
 *  the verified URL, but it is emitted on every page so a re-verification
 *  against any path still succeeds. Removing it un-verifies the property.
 *  Same token as swatchr-site and onestreak-site: it verifies the
 *  neilbrazil.github.io origin, which all three project pages share. */
export const GOOGLE_SITE_VERIFICATION =
  "c2ceYkYa7YYI_VhHImzYbsitVUbdn5hZkYl3jHs13rk";

/** Join a site-relative path onto the Pages base path. */
export const url = (path: string) => BASE + path.replace(/^\//, "");

/** Absolute form of the same, for canonicals, OG tags and JSON-LD. */
export const abs = (path: string) => ORIGIN + url(path);
