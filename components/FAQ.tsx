type FAQItem = { q: string; a: string };

export function FAQ({ title = "You might be wondering.", items }: { title?: string; items: FAQItem[] }) {
  return (
    <section className="section">
      <div className="container">
        <h2>{title}</h2>
        <div className="faq">
          {items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
