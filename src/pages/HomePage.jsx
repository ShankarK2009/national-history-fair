import { Link } from "react-router-dom";
import { ArrowRight, FileText, Scale, ShieldAlert } from "lucide-react";
import { findVisual, researchQuestion, themeFrames, thesis } from "../data/siteData.js";
import { ImageFigure } from "../components/ImageFigure.jsx";
import { Timeline } from "../components/Timeline.jsx";

const icons = [Scale, ShieldAlert, FileText];

export function HomePage({ timeline }) {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="section-kicker">APUSH History Fair</p>
          <h1>Terror's Turning Point</h1>
          <p className="hero-subtitle">The KKK and the Collapse of Reconstruction</p>
          <div className="research-card">
            <span>Research Question</span>
            <p>{researchQuestion}</p>
          </div>
          <div className="hero-actions">
            <Link to="/context" className="primary-action">
              Begin the exhibit <ArrowRight size={18} />
            </Link>
            <Link to="/bibliography" className="secondary-action">
              Sources
            </Link>
          </div>
        </div>
        <div className="hero-visual-stack" aria-label="Featured visual sources">
          <ImageFigure visual={findVisual("reconstruction-lithograph")} featured />
          <ImageFigure visual={findVisual("lost-cause")} />
        </div>
      </section>

      <section className="thesis-band">
        <div>
          <p className="section-kicker">Complex Thesis</p>
          <h2>Reconstruction promised constitutional change. Reaction broke its enforcement.</h2>
        </div>
        <p>{thesis}</p>
      </section>

      <section className="theme-grid" aria-label="Revolution, Reaction, Reform framing">
        {themeFrames.map((frame, index) => {
          const Icon = icons[index];
          return (
            <article key={frame.label} className="theme-card">
              <Icon size={28} />
              <span>{frame.label}</span>
              <h3>{frame.title}</h3>
              <p>{frame.body}</p>
            </article>
          );
        })}
      </section>

      <Timeline items={timeline} />
    </>
  );
}
