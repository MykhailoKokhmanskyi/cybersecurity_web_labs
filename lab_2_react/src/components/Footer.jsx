import {useState, useEffect} from "react";

function Footer() {
  const [sysInfo, setSysInfo] = useState({ userAgent: '', platform: '' })

	useEffect(() => {
		const info = {
			userAgent: navigator.userAgent,
			platformE: navigator.platform
		}

		localStorage.setItem('systemInfo', JSON.stringify(info))

		const savedData = JSON.parse(localStorage.getItem('systemInfo'))
		if(savedData) {
			setSysInfo(savedData)
		}
	}, []);
  return (
    <footer className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
      <p>© 2026 Кохманський Михайло. Всі права захищено. {sysInfo.platform}; {sysInfo.userAgent}</p>
    </footer>
  )
}

export default Footer
