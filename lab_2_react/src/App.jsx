import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import ContactForm from './components/ContactForm.jsx'
import FloatingThemeSwitch from './components/FloatingThemeSwitch.jsx'
import {useEffect, useState} from 'react'

function App() {
	const [theme, setTheme] = useState('dark')
	useEffect(() => {
		const currentHour = new Date().getHours()

		if(currentHour >= 7 && currentHour <= 21) {
			setTheme('light')
		}
	}, [])

	useEffect(() => {
		if(theme === 'light') {
			document.body.classList.add('light')
			document.body.classList.remove('dark')
		} else {
			document.body.classList.remove('light')
			document.body.classList.add('dark')
		}
	}, [theme])
	return (
		<div className='min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-100 font-sans antialiased py-10 px-4 sm:px-6 lg:px-8'>
			<div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-10 space-y-8">
				<FloatingThemeSwitch theme={theme} setTheme={setTheme} />
				<ContactForm/>
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	)
}

export default App
