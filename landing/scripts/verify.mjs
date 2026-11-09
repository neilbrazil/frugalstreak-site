/** Structural checks over the built dist/. Fails loudly rather than warning,
 *  so a broken link or a malformed schema block cannot ship quietly. */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const BASE = "/frugalstreak-site/";

const fail = [];
const warn = [];
const check = (ok, msg) => { if (!ok) fail.push(msg); };
const LANGS = ["de", "fr", "es"];
/** Language a page should declare, from its path: /de/… is German. */
const langOf = (rel) => LANGS.find((l) => rel.startsWith(`/${l}/`)) ?? "en";
const pathOf = (rel) => BASE + rel.slice(1).replace(/index\.html$/, "");
const pages = new Map(); // site path -> { rel, alternates }

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

    const lang = html.match(/<html lang="([^"]+)">/)?.[1];
    check(lang === langOf(rel), `${rel}: <html lang="${lang}">, expected "${langOf(rel)}"`);

    const og = html.match(/<meta property="og:image" content="([^"]+)">/)?.[1];
    check(!!og, `${rel}: missing og:image`);
    if (og) {
      const t = toFile(new URL(og).pathname);
      check(t && existsSync(t), `${rel}: og:image does not resolve -> ${og}`);
    }

    const alternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)">/g)]
      .map((m) => ({ hreflang: m[1], path: new URL(m[2]).pathname }));
    pages.set(pathOf(rel), { rel, alternates });
  }

  // Images: alt text and declared dimensions, so nothing shifts on load.
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    check(/\salt="[^"]+"/.test(tag), `${rel}: <img> without alt -> ${tag.slice(0, 80)}`);
    check(/\swidth="\d+"/.test(tag) && /\sheight="\d+"/.test(tag), `${rel}: <img> without width/height -> ${tag.slice(0, 80)}`);
  }

  // Every App Store link names its page in a campaign token.
  for (const m of html.matchAll(/href="(https:\/\/apps\.apple\.com\/[^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, "&");
    check(/[?&]ct=[^&]+/.test(href), `${rel}: App Store link without ct= -> ${href}`);
    if (!/[?&]pt=\d+/.test(href)) warn.push(`${rel}: App Store link has no pt= (set PROVIDER_TOKEN in site.ts)`);
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

// Every prerendered page is in the sitemap.
const sitemapPaths = new Set(locs.map((l) => new URL(l).pathname));
for (const [path, { rel }] of pages) {
  check(sitemapPaths.has(path), `${rel}: not listed in sitemap.xml`);
}

// hreflang must be reciprocal: every page an alternate points at has to list
// the same set back, or Google ignores the whole cluster.
for (const [path, { rel, alternates }] of pages) {
  if (!alternates.length) continue;
  check(alternates.some((a) => a.path === path), `${rel}: hreflang set does not include the page itself`);
  check(alternates.some((a) => a.hreflang === "x-default"), `${rel}: hreflang set has no x-default`);
  const set = JSON.stringify(alternates.map((a) => a.hreflang + a.path).sort());
  for (const a of alternates) {
    const other = pages.get(a.path);
    check(!!other, `${rel}: hreflang ${a.hreflang} -> ${a.path} is not a page`);
    if (other) {
      const back = JSON.stringify(other.alternates.map((x) => x.hreflang + x.path).sort());
      check(back === set, `${rel}: hreflang not reciprocal with ${other.rel}`);
    }
  }
}

// Each home page's visible FAQ must match its FAQPage schema exactly, or the
// markup is claiming content the page does not show.
for (const homeFile of ["index.html", ...LANGS.map((l) => `${l}/index.html`)]) {
  const home = readFileSync(join(dist, homeFile), "utf8");
  const unescape = (t) =>
    t.replace(/<[^>]+>/g, "").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, "&").trim();
  const visible = [...home.matchAll(/<dt>([\s\S]*?)<\/dt>/g)].map((m) => unescape(m[1]));
  const faqBlock = [...home.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1]))
    .find((o) => o["@type"] === "FAQPage");
  check(!!faqBlock, `${homeFile}: no FAQPage schema`);
  if (faqBlock) {
    const schema = faqBlock.mainEntity.map((q) => q.name);
    check(
      JSON.stringify(schema) === JSON.stringify(visible),
      `${homeFile}: FAQ mismatch:\n    schema:  ${JSON.stringify(schema)}\n    visible: ${JSON.stringify(visible)}`,
    );
  }
}

// robots.txt must point at the real sitemap.
const robots = readFileSync(join(dist, "robots.txt"), "utf8");
check(robots.includes("sitemap.xml"), "robots.txt does not reference sitemap.xml");

if (warn.length) {
  console.warn(`${warn.length} warning(s), first: ${warn[0]}`);
}
if (fail.length) {
  console.error(`\n${fail.length} problem(s):\n` + fail.map((f) => "  ✗ " + f).join("\n"));
  process.exit(1);
}
console.log(`✓ ${htmlFiles.length} HTML files, ${locs.length} sitemap entries, all checks passed`);
