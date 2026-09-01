import { Faq, Page, StoreCta } from "../components";
import { guideBySlug } from "../data";
import { url } from "../site";

export default function GuidePage({ slug }: { slug: string }) {
  const g = guideBySlug(slug);
  const related = g.related.map(guideBySlug);
  return (
    <Page>
      <article className="prose">
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href={url("/")}>Home</a> <span aria-hidden="true">/</span>{" "}
          <a href={url("guides/")}>Guides</a>
        </nav>
        <h1>{g.title}</h1>
        <p className="lede">{g.intro}</p>

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
                  <strong>FrugalStreak</strong> tracks this as one number. Tap
                  a Home Screen widget on every day you get through, with no
                  budget and no bank connection.
                </p>
                <StoreCta small />
              </aside>
            )}
          </section>
        ))}

        <p className="takeaway">{g.takeaway}</p>

        <Faq items={g.faq} heading="Questions about this" />

        <section className="related">
          <h2>Read next</h2>
          <ul className="links">
            {related.map((r) => (
              <li key={r.slug}>
                <a href={url(`guides/${r.slug}/`)}>{r.title}</a>
                <span>{r.description}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="end-cta">
          <StoreCta small />
        </div>
      </article>
    </Page>
  );
}
