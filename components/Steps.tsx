type Step = { index: string; title: string; body: string };

export function Steps({ title, steps }: { title: string; steps: Step[] }) {
  return (
    <section className="section">
      <div className="container">
        <h2>{title}</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(2, minmax(0,1fr))" }}>
          {steps.map((step) => (
            <article className="card" key={step.index}>
              <p><strong>{step.index}</strong></p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
