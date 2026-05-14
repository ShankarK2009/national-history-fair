import { ExternalLink } from "lucide-react";

export function BibliographyPage({ bibliography, visualCredits }) {
  return (
    <section className="bibliography-page">
      <div className="bibliography-hero">
        <p className="section-kicker">Works Cited</p>
        <h1>Bibliography & Visual Credits</h1>
        <p>
          The research bibliography below uses only the sources provided in the packet. Visuals are
          credited separately so image origins are transparent without adding research sources.
        </p>
      </div>

      <div className="bibliography-grid">
        <section className="works-card">
          <h2>Primary Sources</h2>
          <ol>
            {bibliography.primary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>
        <section className="works-card">
          <h2>Secondary Sources</h2>
          <ol>
            {bibliography.secondary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>
      </div>

      <section className="visual-credit-card">
        <h2>Visual Credits</h2>
        <p>
          These are image credits only. They are not used as additional research sources for the
          historical claims on the site.
        </p>
        <div className="credit-list">
          {visualCredits.map((credit) => (
            <a href={credit.link} target="_blank" rel="noreferrer" key={credit.title}>
              <span>
                <strong>{credit.title}</strong>
                <small>
                  {credit.year} · {credit.credit}
                </small>
              </span>
              <ExternalLink size={16} />
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}
