function Projects() {
	return (
		<section id="projects">
			<h2>Проекти</h2>
			<article>
				<h3>LPMonitor - Платформи краудсорсингового моніторингу сервісів</h3>
				<p><strong>Технології:</strong> Node.js, Express.js, AWS (Lightsail, SES), HTML, SSR, PostreSQL</p>
				<p><strong>URL:</strong><a href="https://lpmonitor.org">https://lpmonitor.ogr</a></p>
				<p><strong>Github:</strong><a href="https://github.com/MykhailoKokhmanskyi/LPMonitor">https://github.com/MykhailoKokhmanskyi/LPMonitor</a></p>
				<ul>
					<li>Розробив та розгорнув прототип системи моніторингу доступності університетських серввісів на основі краудсорсингу.</li>
					<li>Реалізував базову систему автентифікації користувачів та проміжне програмне забезпечення (middleware) для обробки запитів.</li>
					<li>Налаштував обмеження частоти запитів (Rate Limiting) для захисту сервера від перевантаження та зловживань.</li>
					<li>Налаштував хостинг серверного вебдодатка (SSR) на базі AWS Lightsail, керування DNS-записами та інтегрував AWS SES для надсилання електронних листів для підтвердження електронної адреси.</li>
					<li>Проект відкладено.</li>
				</ul>
			</article>
		</section>
	)
}

export default Projects
