/** Deployment constants. The site is a GitHub Pages project page, so every
 *  site-absolute path carries the `/frugalstreak-site/` prefix. */
export const ORIGIN = "https://neilbrazil.github.io";
export const BASE = "/frugalstreak-site/";
export const SITE = ORIGIN + BASE.replace(/\/$/, "");

export const APP_ID = "6807068958";
export const APP_STORE_URL =
  "https://apps.apple.com/app/apple-store/id6807068958";
export const SUPPORT_EMAIL = "neilbrazil83+apps@gmail.com";

/** FrugalStreak has an App Store Connect record but has NOT been submitted or
 *  approved, so `APP_STORE_URL` 404s. While this is false the page shows a
 *  "coming soon" note instead of a live download link, and no app-store deep
 *  link or `apple-itunes-app` banner is emitted — a crawled 404 is worse for
 *  both visitors and search than an honest placeholder.
 *  FLIP THIS TO true THE DAY THE APP IS APPROVED, then `npm run deploy`. */
export const APP_LIVE = false;

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
