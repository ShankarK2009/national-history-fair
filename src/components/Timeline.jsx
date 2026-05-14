export function Timeline({ items }) {
  return (
    <section className="timeline" aria-labelledby="timeline-title">
      <div className="section-kicker">Chronology</div>
      <h2 id="timeline-title">From Revolution to Retrenchment</h2>
      <div className="timeline-rail">
        {items.map((item) => (
          <article className="timeline-item" key={`${item.year}-${item.label}`}>
            <time>{item.year}</time>
            <h3>{item.label}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
