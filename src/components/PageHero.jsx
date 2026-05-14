import { ChevronRight } from "lucide-react";
import { findVisual } from "../data/siteData.js";
import { ImageFigure } from "./ImageFigure.jsx";

export function PageHero({ page }) {
  const visual = findVisual(page.heroVisual);

  return (
    <section className={`page-hero tone-${page.color}`}>
      <div className="page-hero-copy">
        <p className="section-kicker">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.deck}</p>
        <div className="breadcrumb-line">
          <span>Terror's Turning Point</span>
          <ChevronRight size={16} />
          <strong>{page.eyebrow}</strong>
        </div>
      </div>
      <ImageFigure visual={visual} featured />
    </section>
  );
}
