function Education() {
  return (
    <section id="education" className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-200 border-l-4 border-emerald-500 pl-3">
        Освіта
      </h2>
      <article className="bg-slate-950 p-6 rounded-xl flex flex-row justify-between items-center border border-slate-800 hover:border-slate-700 transition">
        <div>
          <h3 className="text-base font-bold text-white">F5 — Кібербезпека</h3>
          <p className="text-slate-400 text-sm">Національний Університет "Львівська Політехніка"</p>
        </div>
        <span className="text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-3 py-1 rounded-full">
          2025 – 2029
        </span>
      </article>
    </section>
  )
}

export default Education
