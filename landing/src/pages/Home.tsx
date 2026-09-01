import { Faq, Page, StoreCta, StreakCard } from "../components";
import { APP, FAQ, FEATURES, GUIDES, HERO, PRO } from "../data";
import { url } from "../site";

export default function Home() {
  return (
    <Page>
      <section className="hero hero--split">
        <div className="hero-copy">
          <h1>{HERO.h1}</h1>
          <p className="lede">{HERO.sub}</p>
          <StoreCta />
          <p className="meta">
            {APP.price} · {APP.minOS}+ · No account · Works offline
          </p>
        </div>
        <StreakCard />
      </section>

      <section id="features" className="band">
        <h2>What it does</h2>
        <div className="grid">
          {FEATURES.map((f) => (
            <article key={f.h}>
              <h3>{f.h}</h3>
              <p>{f.p}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band band--alt">
        <h2>{PRO.h}</h2>
        <p className="lede">{PRO.p}</p>
        <ul className="ticks">
          {PRO.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="meta">{PRO.pricing}</p>
      </section>

      <section className="band">
        <h2>Guides</h2>
        <p className="lede">
          How to set the rules, decide what counts, and keep going after the
          day you slip.
        </p>
        <ul className="links">
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <a href={url(`guides/${g.slug}/`)}>{g.title}</a>
              <span>{g.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <Faq items={FAQ} />

      <section className="band band--cta">
        <h2>Start a streak today</h2>
        <p className="lede">
          Pick your rule, put the widget on your Home Screen, and tap it
          tonight.
        </p>
        <StoreCta />
      </section>
    </Page>
  );
}
