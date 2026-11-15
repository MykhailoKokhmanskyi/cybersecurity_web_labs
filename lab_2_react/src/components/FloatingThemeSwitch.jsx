function FloatingThemeSwitch({ theme, setTheme }) {
	return <button className="fixed top-4 left-4 z-[99] text-slate-800 border border-slate-400/10 bg-slate-50 dark:bg-slate-800 dark:text-slate-50 py-2 px-6 rounded-xl shadow-lg" onClick={() => {if(theme==='dark') {setTheme('light')} else {setTheme('dark')}}}>{theme === 'dark' ? ("Ввімкнути світлу тему") : ("Ввімкнути темну тему")}</button>
}

export default FloatingThemeSwitch
