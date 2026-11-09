import { Page } from "../components";
import { guidePath, guidesNewestFirst, type Content } from "../content";
import { url } from "../site";

/** English only: the other languages carry one guide each, listed on their
 *  home page. */
export default function GuidesIndex({ c }: { c: Content }) {
  return (
    <Page c={c}>
      <section className="hero hero--sm">
        <h1>No-spend challenge guides</h1>
        <p className="lede">
          Short, practical pieces on running a no-spend challenge without
          turning it into a budget.
        </p>
      </section>
      <section className="band">
        <ul className="links">
          {guidesNewestFirst(c).map((g) => (
            <li key={g.slug}>
              <a href={url(guidePath(c, g.slug))}>{g.title}</a>
              <span>{g.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}
