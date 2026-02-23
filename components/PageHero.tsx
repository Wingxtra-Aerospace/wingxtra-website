type PageHeroProps = {
  title: string;
  subtitle: string;
};

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-section">
      <div className="mx-auto max-w-container px-4 md:px-6">
        <h1 className="text-h1 text-slate-900">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
