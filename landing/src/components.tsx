import type { ReactNode } from "react";
import { APP, fill, homePath, LOCALES, type Content, type Shot } from "./content";
import {
  APP_LIVE,
  OTHER_APPS,
  storeLink,
  SUPPORT_EMAIL,
  url,
} from "./site";

/** Until the app is approved this renders as a non-link note rather than a
 *  dead App Store URL. See APP_LIVE in site.ts. `ct` is the campaign token
 *  that names the page and spot, so App Analytics can tell them apart. */
export function StoreCta({
  c,
  ct,
  small,
}: {
  c: Content;
  ct: string;
  small?: boolean;
}) {
  const cls = small ? "cta cta--sm" : "cta";
  if (!APP_LIVE) {
    return (
      <span className={`${cls} cta--pending`} role="note">
        Coming to the App Store
      </span>
    );
  }
  return (
    <a className={cls} href={storeLink(ct)} aria-label={fill(c.ui.downloadAria)}>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.6 2.1-1.5 2.7-.4 6.6 1.1 8.8.7 1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.1 0 1.9-1.1 2.6-2.1.8-1.2 1.2-2.4 1.2-2.4s-2.2-.9-2.2-3.6zM14.3 5.9c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-.9 2.6 1 .1 2-.5 2.6-1.2z"
        />
      </svg>
      {c.ui.download}
    </a>
  );
}

/** Links to each language's home page. On a home page these are the page's
 *  own translations; on a guide they lead to that language's home. */
function LanguageSwitcher({ c }: { c: Content }) {
  return (
    <nav className="langs" aria-label={c.ui.languages}>
      {LOCALES.map((l) => (
        <a
          key={l.lang}
          href={url(homePath(l))}
          hrefLang={l.lang}
          lang={l.lang}
          aria-current={l.lang === c.lang ? "true" : undefined}
        >
          {l.lang.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}

export function Header({ c }: { c: Content }) {
  const home = homePath(c);
  return (
    <header className="site-head">
      <a className="brand" href={url(home)}>
        <Logo size={30} />
        <span>{APP.name}</span>
      </a>
      <nav className="site-nav" aria-label="Primary">
        <a href={url(home + "#features")}>{c.ui.navFeatures}</a>
        <a href={url(c.lang === "en" ? "guides/" : home + "#guides")}>
          {c.ui.navGuides}
        </a>
        <a href={url(home + "#faq")}>{c.ui.navFaq}</a>
      </nav>
      <LanguageSwitcher c={c} />
    </header>
  );
}

export function Footer({ c }: { c: Content }) {
  return (
    <footer className="site-foot">
      <nav aria-label="Footer">
        <a href={url(homePath(c))}>{c.ui.home}</a>
        {c.lang === "en" && <a href={url("guides/")}>{c.ui.navGuides}</a>}
        <a href={url("privacy.html")}>{c.ui.privacy}</a>
        <a href={url("terms.html")}>{c.ui.terms}</a>
        <a href={`mailto:${SUPPORT_EMAIL}`}>{c.ui.support}</a>
      </nav>
      <nav className="more-apps" aria-label={c.ui.moreApps}>
        <span>{c.ui.moreApps}:</span>
        {OTHER_APPS.map((a) => (
          <a key={a.name} href={a.href}>
            {a.name} <span>({a.what})</span>
          </a>
        ))}
      </nav>
      <p>
        {fill(c.ui.madeBy)} {c.ui.notAffiliated}
      </p>
    </footer>
  );
}

/** The app icon, drawn inline so the header needs no extra request. Same
 *  geometry and colours as scripts/genicon.py, which takes them from the app's
 *  Icon Composer layers. Keep the two in step if either changes. */
export function Logo({ size = 96 }: { size?: number }) {
  return (
    <svg
      className="logo"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <rect width="100" height="100" rx="22.4" fill="#EEE8DA" />
      <rect x="30" y="26" width="40" height="15" rx="7.5" fill="#E8A33D" />
      <rect x="24" y="45" width="52" height="15" rx="7.5" fill="#DE4E33" />
      <rect x="18" y="64" width="64" height="15" rx="7.5" fill="#8E2413" />
      <circle cx="78" cy="22" r="6" fill="#14161A" />
    </svg>
  );
}

/** Screenshot dimensions as written by scripts/assets.mjs: the 1320×2868
 *  capture at half size. Declared so the browser reserves the space. */
export const SHOT_W = 660;
export const SHOT_H = 1434;

/** A real screenshot from the shipping app, in the page's language. */
export function ShotImg({
  c,
  shot,
  eager,
}: {
  c: Content;
  shot: Shot;
  eager?: boolean;
}) {
  return (
    <img
      className="shot"
      src={url(`assets/shots/${c.lang}/${shot.file}.webp`)}
      alt={shot.alt}
      width={SHOT_W}
      height={SHOT_H}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
    />
  );
}

export function Page({ c, children }: { c: Content; children: ReactNode }) {
  return (
    <>
      <Header c={c} />
      <main>{children}</main>
      <Footer c={c} />
    </>
  );
}

export function Faq({
  items,
  heading,
}: {
  items: { q: string; a: string }[];
  heading: string;
}) {
  return (
    <section id="faq" className="band">
      <h2>{heading}</h2>
      <dl className="faq">
        {items.map((f) => (
          <div key={f.q}>
            <dt>{f.q}</dt>
            <dd>{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
