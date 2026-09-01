import type { ReactNode } from "react";
import { APP } from "./data";
import { APP_LIVE, APP_STORE_URL, SUPPORT_EMAIL, url } from "./site";

/** Until the app is approved this renders as a non-link note rather than a
 *  dead App Store URL. See APP_LIVE in site.ts. */
export function StoreCta({ small }: { small?: boolean }) {
  const cls = small ? "cta cta--sm" : "cta";
  if (!APP_LIVE) {
    return (
      <span className={`${cls} cta--pending`} role="note">
        Coming to the App Store
      </span>
    );
  }
  return (
    <a
      className={cls}
      href={APP_STORE_URL}
      aria-label={`Download ${APP.name} on the App Store`}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.6 2.1-1.5 2.7-.4 6.6 1.1 8.8.7 1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.1 0 1.9-1.1 2.6-2.1.8-1.2 1.2-2.4 1.2-2.4s-2.2-.9-2.2-3.6zM14.3 5.9c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-.9 2.6 1 .1 2-.5 2.6-1.2z"
        />
      </svg>
      Download on the App Store
    </a>
  );
}

export function Header() {
  return (
    <header className="site-head">
      <a className="brand" href={url("/")}>
        <Leaf size={28} />
        <span>{APP.name}</span>
      </a>
      <nav className="site-nav" aria-label="Primary">
        <a href={url("/#features")}>Features</a>
        <a href={url("guides/")}>Guides</a>
        <a href={url("/#faq")}>FAQ</a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-foot">
      <nav aria-label="Footer">
        <a href={url("/")}>Home</a>
        <a href={url("guides/")}>Guides</a>
        <a href={url("privacy.html")}>Privacy Policy</a>
        <a href={url("terms.html")}>Terms of Use</a>
        <a href={`mailto:${SUPPORT_EMAIL}`}>Support</a>
      </nav>
      <p>
        {APP.fullName} is made by {APP.author}. Not affiliated with Apple Inc.
        App Store is a trademark of Apple Inc.
      </p>
    </footer>
  );
}

/** The leaf mark, drawn rather than loaded, so the hero needs no screenshot
 *  asset to look finished. Same geometry as scripts/genicon.py: a vesica (the
 *  overlap of two circles) with a midrib, rotated onto the diagonal. Keep the
 *  two in step if either changes. */
export function Leaf({ size = 96 }: { size?: number }) {
  // Arc radius for a lens 80 long and 26 wide: (l^2 + w^2) / 2w.
  const R = 68.04;
  return (
    <svg
      className="leaf"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <g transform="rotate(45 50 50)">
        <path
          fill="currentColor"
          d={`M50 10 A${R} ${R} 0 0 1 50 90 A${R} ${R} 0 0 1 50 10 Z`}
        />
        <path
          d="M50 12 L50 70"
          stroke="var(--bg)"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

/** The streak card in the hero. A drawn approximation of the app's first
 *  screen: current count, then five weeks of logged days. Static markup, so
 *  the page still needs no screenshot asset and no client JS. */
export function StreakCard() {
  // Five weeks, oldest first, seven per row. The last 12 cells are contiguous
  // so the grid agrees with the "12" above it; the earlier weeks are broken up
  // because a fully filled grid beside a 12-day streak reads as fake. Fixed
  // rather than random so the markup is identical on every build.
  const filled = new Set([
    1, 2, 4, 7, 8, 9, 11, 14, 15, 16, 17, 19, 20, 21,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
  ]);
  return (
    <div className="streak-card" aria-hidden="true">
      <Leaf size={34} />
      <div className="streak-num">12</div>
      <div className="streak-label">day no-spend streak</div>
      <div className="heat">
        {Array.from({ length: 35 }, (_, i) => (
          <span key={i} className={filled.has(i) ? "on" : ""} />
        ))}
      </div>
    </div>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function Faq({
  items,
  heading = "Common questions",
}: {
  items: { q: string; a: string }[];
  heading?: string;
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
