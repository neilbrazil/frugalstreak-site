/** Structural checks over the built dist/. Fails loudly rather than warning,
 *  so a broken link or a malformed schema block cannot ship quietly. */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const BASE = "/frugalstreak-site/";

const fail = [];
const check = (ok, msg) => { if (!ok) fail.push(msg); };

const htmlFiles = [];
(function walk(dir) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (n.endsWith(".html")) htmlFiles.push(p);
  }
})(dist);

/** Map a URL onto the file dist/ would serve for it. Site-absolute hrefs carry
 *  the Pages base prefix; the static pages copied from public/ use relative
 *  ones, which resolve against the directory of the file that contains them. */
const toFile = (href, fromDir) => {
  let p = href.replace(/[?#].*$/, "");
  if (p.startsWith("/")) {
    if (!p.startsWith(BASE)) return null;
    p = p.slice(BASE.length);
    if (p === "" || p.endsWith("/")) p += "index.html";
    return join(dist, p);
  }
  if (fromDir === undefined) return null;
  if (p === "" || p.endsWith("/")) p += "index.html";
  return resolve(fromDir, p);
};

for (const file of htmlFiles) {
  const rel = file.slice(dist.length);
  const html = readFileSync(file, "utf8");
  const prerendered = html.includes("<link rel=\"canonical\"");

  // Static pages copied from public/ are not route-rendered and are exempt
  // from the canonical/JSON-LD rules; they still get link checked below.
  if (prerendered) {
    const h1s = html.match(/<h1[\s>]/g) || [];
    check(h1s.length === 1, `${rel}: expected exactly 1 <h1>, found ${h1s.length}`);
    check(/<link rel="canonical" href="https?:\/\/[^"]+"/.test(html), `${rel}: missing canonical`);
    check(/<meta name="description" content="[^"]{50,160}"/.test(html), `${rel}: description missing or outside 50-160 chars`);

    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try { JSON.parse(m[1]); }
      catch (e) { fail.push(`${rel}: unparseable JSON-LD (${e.message})`); }
    }
  }

  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|#|data:)/.test(href)) continue;
    const target = toFile(href, dirname(file));
    if (!target) { fail.push(`${rel}: link outside base -> ${href}`); continue; }
    check(existsSync(target), `${rel}: dead internal link -> ${href}`);
  }
}

// Sitemap entries must all resolve.
const sitemap = readFileSync(join(dist, "sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
check(locs.length > 0, "sitemap.xml has no <loc> entries");
for (const loc of locs) {
  const target = toFile(new URL(loc).pathname);
  check(target && existsSync(target), `sitemap: ${loc} does not resolve to a file`);
}

// The homepage's visible FAQ must match its FAQPage schema exactly, or the
// markup is claiming content the page does not show.
const home = readFileSync(join(dist, "index.html"), "utf8");
const visible = [...home.matchAll(/<dt>([\s\S]*?)<\/dt>/g)].map((m) =>
  m[1].replace(/<[^>]+>/g, "").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").trim(),
);
const faqBlock = [...home.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map((m) => JSON.parse(m[1]))
  .find((o) => o["@type"] === "FAQPage");
check(!!faqBlock, "homepage has no FAQPage schema");
if (faqBlock) {
  const schema = faqBlock.mainEntity.map((q) => q.name);
  check(
    JSON.stringify(schema) === JSON.stringify(visible),
    `homepage FAQ mismatch:\n    schema:  ${JSON.stringify(schema)}\n    visible: ${JSON.stringify(visible)}`,
  );
}

// robots.txt must point at the real sitemap.
const robots = readFileSync(join(dist, "robots.txt"), "utf8");
check(robots.includes("sitemap.xml"), "robots.txt does not reference sitemap.xml");

if (fail.length) {
  console.error(`\n${fail.length} problem(s):\n` + fail.map((f) => "  ✗ " + f).join("\n"));
  process.exit(1);
}
console.log(`✓ ${htmlFiles.length} HTML files, ${locs.length} sitemap entries, all checks passed`);
