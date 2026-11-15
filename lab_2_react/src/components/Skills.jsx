function Skills() {
  const skillCategories = [
    {
      title: "Мови програмування",
      skills: ["HTML", "CSS", "JavaScript", "Python3", "Lua", "C#", "C++"],
    },
    {
      title: "Бібліотеки і фреймворки",
      skills: ["React.js", "Express.js", "Next.js", "JWT"],
    },
    {
      title: "Інструменти & Мережі",
      skills: ["Git", "GitHub", "Vim", "Linux", "LaTeX", "SQL", "MySQL", "PostgreSQL", "MongoDB", "SSL", "SSH"],
    },
  ]

  return (
    <section id="skills" className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-200 border-l-4 border-emerald-500 pl-3">
        Навики
      </h2>
      <div className="space-y-3">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition">
            <h3 className="text-xs font-semibold uppercase text-slate-400 mb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="bg-slate-800 text-slate-300 text-xs px-2 py-0.5 rounded border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
