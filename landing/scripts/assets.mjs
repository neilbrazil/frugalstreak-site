/** Writes the site's generated images and printables into public/assets/,
 *  where the build copies them from. Run with `npm run assets` whenever the
 *  app's screenshots or the page headlines change, then commit the output.
 *
 *   - shots/<lang>/<name>.webp  the app's real iPhone captures, half size
 *   - og-<lang>.png             1200×630 share image: headline + hero shot
 *   - printables/no-spend-calendar-2027-<lang>.pdf
 *
 *  Needs cwebp (Homebrew `webp`) and Google Chrome. */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const assets = join(root, "public", "assets");
const SHOTS = resolve(root, "../../Screenshots/v1.3/shots/iphone");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const YEAR = 2027;

const { LOCALES } = await import(join(root, "dist-ssr", "entry-server.js"));

const tmp = join(root, "dist-assets-tmp");
rmSync(tmp, { recursive: true, force: true });
mkdirSync(tmp, { recursive: true });

const chrome = (...args) =>
  execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", ...args], {
    stdio: "ignore",
  });

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Screenshots ---------------------------------------------------------------

for (const c of LOCALES) {
  const out = join(assets, "shots", c.lang);
  mkdirSync(out, { recursive: true });
  for (const s of [c.hero.shot, ...c.gallery.shots]) {
    const src = join(SHOTS, c.lang, `${s.file}.png`);
    if (!existsSync(src)) throw new Error(`missing capture ${src}`);
    execFileSync("cwebp", ["-quiet", "-q", "80", "-resize", "660", "1434", src, "-o", join(out, `${s.file}.webp`)]);
  }
  console.log("shots", c.lang);
}

// Share images --------------------------------------------------------------

for (const c of LOCALES) {
  const hero = pathToFileURL(join(SHOTS, c.lang, `${c.hero.shot.file}.png`)).href;
  const icon = pathToFileURL(join(assets, "icon.png")).href;
  const html = `<!doctype html><meta charset="utf-8"><style>
    html,body{margin:0;width:1200px;height:630px;overflow:hidden}
    body{background:#eee8da;color:#241f17;font-family:-apple-system,"Helvetica Neue",Arial,sans-serif;
      display:grid;grid-template-columns:1fr 360px;align-items:center;gap:40px;padding:0 70px;box-sizing:border-box}
    .brand{display:flex;align-items:center;gap:18px;font-size:34px;font-weight:700;margin-bottom:34px}
    .brand img{width:72px;height:72px;border-radius:16px;box-shadow:0 0 0 2px #d8d0be}
    h1{font-size:58px;line-height:1.08;letter-spacing:-0.02em;margin:0 0 22px}
    p{font-size:26px;color:#4a4236;margin:0}
    .shot{width:300px;border-radius:34px;border:2px solid #d8d0be;align-self:start;margin-top:70px;box-shadow:0 20px 50px rgba(36,31,23,.18)}
  </style><div><div class="brand"><img src="${icon}">FrugalStreak</div>
  <h1>${esc(c.hero.h1)}</h1><p>${esc(c.app.tagline)}</p></div>
  <img class="shot" src="${hero}">`;
  const file = join(tmp, `og-${c.lang}.html`);
  writeFileSync(file, html);
  chrome("--force-device-scale-factor=1", "--window-size=1200,630", `--screenshot=${join(assets, `og-${c.lang}.png`)}`, pathToFileURL(file).href);
  console.log("og", c.lang);
}

// Printable calendars -------------------------------------------------------

/** Per-language labels and conventions. US Letter with Sunday-first weeks for
 *  English (the US is its largest market); A4 with Monday-first weeks for the
 *  rest, as calendars are printed there. */
const PRINT = {
  en: { title: `No-spend calendar ${YEAR}`, rule: "My rule:", best: "Best run this month: _____ days", paper: "Letter", monday: false },
  de: { title: `No-Spend-Kalender ${YEAR}`, rule: "Meine Regel:", best: "Längste Serie diesen Monat: _____ Tage", paper: "A4", monday: true },
  fr: { title: `Calendrier zéro dépense ${YEAR}`, rule: "Ma règle :", best: "Meilleure série du mois : _____ jours", paper: "A4", monday: true },
  es: { title: `Calendario sin gastar ${YEAR}`, rule: "Mi regla:", best: "Mejor racha del mes: _____ días", paper: "A4", monday: true },
};

for (const c of LOCALES) {
  const p = PRINT[c.lang];
  const monthName = new Intl.DateTimeFormat(c.lang, { month: "long", timeZone: "UTC" });
  const dayName = new Intl.DateTimeFormat(c.lang, { weekday: "short", timeZone: "UTC" });
  // 2023-01-01 was a Sunday: a fixed week to read weekday names from.
  const order = p.monday ? [1, 2, 3, 4, 5, 6, 0] : [0, 1, 2, 3, 4, 5, 6];
  const heads = order
    .map((d) => `<th>${esc(dayName.format(new Date(Date.UTC(2023, 0, 1 + d))))}</th>`)
    .join("");

  const pages = [];
  for (let m = 0; m < 12; m++) {
    const first = new Date(Date.UTC(YEAR, m, 1));
    const days = new Date(Date.UTC(YEAR, m + 1, 0)).getUTCDate();
    const lead = order.indexOf(first.getUTCDay());
    const cells = [];
    for (let i = 0; i < lead; i++) cells.push(`<td class="off"></td>`);
    for (let d = 1; d <= days; d++) cells.push(`<td><span>${d}</span></td>`);
    while (cells.length % 7) cells.push(`<td class="off"></td>`);
    const rows = [];
    for (let i = 0; i < cells.length; i += 7) rows.push(`<tr>${cells.slice(i, i + 7).join("")}</tr>`);
    const name = monthName.format(first);
    // Share the page's free height between however many weeks this month
    // spans (4–6), so every month fills its sheet.
    const rowH = ((p.paper === "A4" ? 200 : 186) / rows.length).toFixed(1);
    pages.push(`<section>
      <header><div class="t">${esc(p.title)}</div><h1>${esc(name[0].toUpperCase() + name.slice(1))} ${YEAR}</h1></header>
      <div class="rule">${esc(p.rule)}</div>
      <table style="--row:${rowH}mm"><thead><tr>${heads}</tr></thead><tbody>${rows.join("")}</tbody></table>
      <div class="best">${esc(p.best)}</div>
      <footer>FrugalStreak · neilbrazil.github.io/frugalstreak-site</footer>
    </section>`);
  }

  const html = `<!doctype html><html lang="${c.lang}"><meta charset="utf-8"><style>
    @page{size:${p.paper};margin:14mm}
    body{margin:0;font-family:-apple-system,"Helvetica Neue",Arial,sans-serif;color:#241f17}
    section{page-break-after:always}
    section:last-child{page-break-after:auto}
    header{display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #c88b3a;padding-bottom:6px}
    .t{font-size:11pt;color:#6b6153}
    h1{font-size:26pt;margin:0}
    .rule{margin:16px 0 14px;padding-bottom:22px;border-bottom:1px solid #b9b0a0;font-size:11pt;color:#4a4236}
    table{width:99.6%;border-collapse:collapse;table-layout:fixed}
    th{font-size:10pt;font-weight:600;color:#6b6153;padding:4px 0;text-transform:uppercase}
    td{border:1px solid #b9b0a0;vertical-align:top;height:var(--row);padding:4px 6px}
    td span{font-size:10pt;color:#6b6153}
    td.off{background:#f3efe6}
    .best{margin-top:14px;font-size:12pt}
    footer{margin-top:10px;font-size:8.5pt;color:#8c8273}
  </style>${pages.join("")}</html>`;
  const file = join(tmp, `calendar-${c.lang}.html`);
  writeFileSync(file, html);
  const out = join(assets, "printables");
  mkdirSync(out, { recursive: true });
  chrome("--no-pdf-header-footer", `--print-to-pdf=${join(out, `no-spend-calendar-${YEAR}-${c.lang}.pdf`)}`, pathToFileURL(file).href);
  console.log("calendar", c.lang);
}

rmSync(tmp, { recursive: true, force: true });
console.log("assets written to public/assets/");
