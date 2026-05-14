import { ExternalLink } from "lucide-react";
import { useState } from "react";

export function ImageFigure({ visual, featured = false }) {
  const [failed, setFailed] = useState(false);

  if (!visual) return null;

  return (
    <figure className={featured ? "image-figure featured" : "image-figure"}>
      <a href={visual.link} target="_blank" rel="noreferrer" className="image-frame">
        {!failed ? (
          <img src={visual.src} alt={visual.alt} loading="lazy" onError={() => setFailed(true)} />
        ) : (
          <div className="image-fallback" role="img" aria-label={visual.alt}>
            <span>{visual.year}</span>
            <strong>{visual.title}</strong>
          </div>
        )}
      </a>
      <figcaption>
        <span>
          {visual.title} <em>{visual.year}</em>
        </span>
        <a href={visual.link} target="_blank" rel="noreferrer" aria-label={`Open source for ${visual.title}`}>
          <ExternalLink size={14} />
        </a>
      </figcaption>
    </figure>
  );
}
