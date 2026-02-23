type Item = { title: string; body: string };

export function FeatureGrid({ title, items, columns = 3 }: { title?: string; items: Item[]; columns?: 2 | 3 | 4 }) {
  return (
    <section className="section">
      <div className="container">
        {title ? <h2>{title}</h2> : null}
        <div className="grid" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))` }}>
          {items.map((item) => (
            <article key={item.title} className="card fade-up">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
