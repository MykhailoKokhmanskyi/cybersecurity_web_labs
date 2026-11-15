function Header() {
  return (
    <header className="border-b border-slate-800 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-fit">
        <div className="w-fit">
          <h1 className="text-3xl w-xl sm:text-4xl font-bold text-white">
        	Кохманський Михайло Михайлович
          </h1>
          <p className="text-lg w-fit font-medium text-emerald-400">
            Information Security Specialist
          </p>
          <p className="text-sm w-fit text-slate-400">
            📍 Місто: Львів, Україна
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 text-sm">
          <a
            href="mailto:mykhailo.kokhmanskyi.kb.2025@lpnu.ua"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition border border-slate-700"
          >
            📧 Email
          </a>
          <a
            href="https://github.com/MykhailoKokhmanskyi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
