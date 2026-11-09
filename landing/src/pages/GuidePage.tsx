import { Faq, Page, StoreCta } from "../components";
import {
  APP,
  guideBySlug,
  guidePath,
  homePath,
  type Content,
} from "../content";
import { url } from "../site";

export default function GuidePage({ c, slug }: { c: Content; slug: string }) {
  const g = guideBySlug(c, slug);
  const related = g.related.map((s) => guideBySlug(c, s));
  const ct = c.lang === "en" ? `guide-${g.slug}` : `guide-${c.lang}-${g.slug}`;
  return (
    <Page c={c}>
      <article className="prose">
        <nav className="crumbs" aria-label={c.ui.breadcrumb}>
          <a href={url(homePath(c))}>{c.ui.home}</a>
          {c.lang === "en" && (
            <>
              {" "}
              <span aria-hidden="true">/</span>{" "}
              <a href={url("guides/")}>{c.ui.navGuides}</a>
            </>
          )}
        </nav>
        <h1>{g.title}</h1>
        <p className="updated">
          {c.ui.updated} <time dateTime={g.updated}>{g.updated}</time>
        </p>
        <p className="lede">{g.intro}</p>

        {g.printable && (
          <p className="printable">
            <a href={url(`assets/${g.printable.file}`)} download>
              {g.printable.label}
            </a>
          </p>
        )}

        {g.sections.map((s, i) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.p.map((para, j) => (
              <p key={j}>{para}</p>
            ))}
            {/* One CTA, mid-article, rather than one per section. */}
            {i === Math.floor(g.sections.length / 2) - 1 && (
              <aside className="callout">
                <p>
                  <strong>{APP.name}</strong> {c.ui.callout}
                </p>
                <StoreCta c={c} ct={`${ct}-mid`} small />
              </aside>
            )}
          </section>
        ))}

        <p className="takeaway">{g.takeaway}</p>

        <Faq items={g.faq} heading={c.ui.guideFaqH} />

        {related.length > 0 && (
          <section className="related">
            <h2>{c.ui.readNext}</h2>
            <ul className="links">
              {related.map((r) => (
                <li key={r.slug}>
                  <a href={url(guidePath(c, r.slug))}>{r.title}</a>
                  <span>{r.description}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="end-cta">
          <StoreCta c={c} ct={`${ct}-end`} small />
        </div>
      </article>
    </Page>
  );
}
