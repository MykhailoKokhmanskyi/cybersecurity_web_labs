function Projects() {
  const techStack = ["Node.js", "Express.js", "AWS (Lightsail, SES)", "HTML", "SSR", "PostgreSQL"]

  return (
    <section id="projects" className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-200 border-l-4 border-emerald-500 pl-3">
        Проєкти
      </h2>
      <article className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
          <h3 className="text-lg font-bold text-white">
            LPMonitor <span className="text-slate-400 font-normal">— Платформа краудсорсингового моніторингу сервісів</span>
          </h3>
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-medium px-2 py-1 rounded">
            Проєкт відкладено
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 my-3">
          {techStack.map((tech, id) => (
            <span key={id} className="bg-slate-800 text-slate-300 text-xs px-2 py-0.5 rounded border border-slate-700">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-xs font-medium text-emerald-400 my-3">
          <a href="https://lpmonitor.org" className="hover:underline">🌐 Live Demo</a>
          <a href="https://github.com/MykhailoKokhmanskyi/LPMonitor" className="hover:underline">📦 GitHub Repository</a>
        </div>

        <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm mt-4 marker:text-emerald-500">
          <li>Розробив та розгорнув прототип системи моніторингу доступності университетських сервісів на основі краудсорсингу.</li>
          <li>Реалізував базову систему автентифікації користувачів та проміжне програмне забезпечення (middleware) для обробки запитів.</li>
          <li>Налаштував обмеження частоти запитів (Rate Limiting) для захисту сервера від перевантаження та зловживань.</li>
          <li>Налаштував хостинг серверного вебдодатка (SSR) на базі AWS Lightsail, керування DNS-записами та інтегрував AWS SES для надсилання електронних листів підтвердження.</li>
        </ul>
      </article>
    </section>
  )
}

export default Projects
