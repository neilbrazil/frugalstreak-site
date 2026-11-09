import { Faq, Page, ShotImg, StoreCta } from "../components";
import { guidePath, guidesNewestFirst, type Content } from "../content";
import { url } from "../site";

export default function Home({ c }: { c: Content }) {
  const suffix = c.lang === "en" ? "" : `-${c.lang}`;
  return (
    <Page c={c}>
      <section className="hero hero--split">
        <div className="hero-copy">
          <h1>{c.hero.h1}</h1>
          <p className="lede">{c.hero.sub}</p>
          <StoreCta c={c} ct={`home${suffix}`} />
          <p className="meta">{c.ui.metaLine}</p>
        </div>
        <div className="hero-shot">
          <ShotImg c={c} shot={c.hero.shot} eager />
        </div>
      </section>

      <section id="features" className="band">
        <h2>{c.ui.featuresH}</h2>
        <div className="grid">
          {c.features.map((f) => (
            <article key={f.h}>
              <h3>{f.h}</h3>
              <p>{f.p}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <h2>{c.gallery.h}</h2>
        <div className="gallery">
          {c.gallery.shots.map((s) => (
            <figure key={s.file}>
              <ShotImg c={c} shot={s} />
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="band band--alt">
        <h2>{c.pro.h}</h2>
        <p className="lede">{c.pro.p}</p>
        <ul className="ticks">
          {c.pro.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="meta">{c.pro.pricing}</p>
      </section>

      <section id="guides" className="band">
        <h2>{c.ui.guidesH}</h2>
        <p className="lede">{c.ui.guidesLede}</p>
        <ul className="links">
          {guidesNewestFirst(c).map((g) => (
            <li key={g.slug}>
              <a href={url(guidePath(c, g.slug))}>{g.title}</a>
              <span>{g.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <Faq items={c.faq} heading={c.ui.faqH} />

      <section className="band band--cta">
        <h2>{c.ui.ctaH}</h2>
        <p className="lede">{c.ui.ctaLede}</p>
        <StoreCta c={c} ct={`home-end${suffix}`} />
      </section>
    </Page>
  );
}
