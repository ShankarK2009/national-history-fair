export default function ImageBlock({ src, alt, citation }) {
  return (
    <div className="historical-img-container animate-fade-in delay-200">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="historical-img" loading="lazy" />
      <p className="img-citation">{citation}</p>
    </div>
  );
}
