import { Quote } from "lucide-react";
import { ImageFigure } from "../components/ImageFigure.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { Timeline } from "../components/Timeline.jsx";
import { findVisual } from "../data/siteData.js";

export function ContentPage({ page, timeline }) {
  return (
    <>
      <PageHero page={page} />
      <section className="content-stack">
        {page.sections.map((section, index) => (
          <article className="evidence-section" key={section.title}>
            <div className="evidence-copy">
              <div className="source-pill">
                <Quote size={15} />
                <span>{section.source}</span>
              </div>
              <h2>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="evidence-visuals">
              {section.visualIds.map((id) => (
                <ImageFigure key={id} visual={findVisual(id)} />
              ))}
            </div>
          </article>
        ))}
      </section>
      {page.slug === "collapse" ? <Timeline items={timeline.slice(2)} /> : null}
    </>
  );
}
