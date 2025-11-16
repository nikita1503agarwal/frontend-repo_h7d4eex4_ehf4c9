export default function Section({ title, children }) {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-serif text-zinc-100 text-lg tracking-wide">{title}</h2>
        <button className="text-[12px] text-zinc-400 hover:text-zinc-200 transition-colors">Ver tudo</button>
      </div>
      {children}
    </section>
  );
}
