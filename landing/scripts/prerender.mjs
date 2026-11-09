/** Renders every route in ROUTES to dist/<path>/index.html, copies public/
 *  verbatim, and generates sitemap.xml + robots.txt from the same route list
 *  so a new guide never needs a second edit to appear in either. Each
 *  sitemap lastmod is the page's own `updated` date, not the build date: a
 *  lastmod that changes on every build teaches Google to ignore it. */
import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const { ROUTES, renderRoute, ORIGIN, BASE, abs } = await import(
  join(root, "dist-ssr", "entry-server.js")
);

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(join(root, "public"), dist, { recursive: true });

const locs = [];

for (const route of ROUTES) {
  const html = renderRoute(route);
  const rel = route.meta.path.replace(/^\//, "");
  const outDir = join(dist, rel);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
  const home = !rel.includes("guides");
  locs.push({
    loc: abs(route.meta.path),
    lastmod: route.meta.updated,
    alternates: route.meta.alternates,
    priority: route.meta.path === "/" ? "1.0" : home ? "0.9" : "0.8",
  });
  console.log("rendered", route.meta.path);
}

writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ` +
    `xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    locs
      .map(
        (u) =>
          `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod>` +
          u.alternates
            .map(
              (a) =>
                `<xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${abs(a.path)}"/>`,
            )
            .join("") +
          `<priority>${u.priority}</priority></url>`,
      )
      .join("\n") +
    `\n</urlset>\n`,
);

writeFileSync(
  join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\nDisallow: ${BASE}landing/\n\n` +
    `Sitemap: ${ORIGIN}${BASE}sitemap.xml\n`,
);

console.log(`\n${ROUTES.length} pages + sitemap.xml + robots.txt -> dist/`);
