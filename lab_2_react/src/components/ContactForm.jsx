import {useState, useEffect} from 'react';

function FormInput({ fieldName, fieldLabel, fieldType }) {
	return (
		<div className="flex flex-row justify-between items-center pb-2 m-2">
			<label for={fieldName}>{fieldLabel}</label>
			<input type={fieldType} name={fieldName} className="bg-slate-950 rounded border border-slate-800 px-6 py-0.5" />
		</div>
	)
}

function ContactForm() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsOpen(true);
		}, 60000)

		return () => clearTimeout(timer);
	}, [])

	async function handleSubmit(event) {
		event.preventDefault();
		
		const form = event.target;
		const data = new FormData(form)

		try {
			const response = await fetch(form.action, {
				method: form.method,
				body: data,
				headers: {
					'Accept': 'application/json'
				}
			})

			if(response.ok) {
				form.reset();
				setIsOpen(false)
			}
		} catch(error) {
			console.error(error);
		}
	}

	if(!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
			<div className="w-full max-w-md p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl">
				<div className="flex flex-row justify-between items-center">
					<h3 className="font-bold text-xl">Зворотній зв'язок</h3>
					<button className="py-2 px-2 bg-emerald-600 rounded-xl hover:bg-emerald-700" onClick={() => setIsOpen(false)}>Закрити</button>
				</div>
				<form onSubmit={handleSubmit} action="https://formspree.io/f/mjyyazby" method="POST" className="divide-y divide-slate-800 space-y-2">
					<FormInput fieldName="name" fieldLabel="Ваше ім'я:" fieldType="text" />
					<FormInput fieldName="email" fieldLabel="Адреса електронної пошти:" fieldType="email" />
					<FormInput fieldName="phoneNumber" fieldLabel="Номер телефону" fieldType="tel" />
					<div className="m-2">
						<label for="messageBody">Ваше повідомлення:</label>
						<textarea className="mt-2 resize-none w-full h-24 bg-slate-950 rounded border border-slate-800 px-6 py-0.5" name="messageBody" id="messageBody"></textarea>
					</div>
					<div className="flex w-full flex-row justify-center items-center">
						<input className="mt-2 ml-2 px-10 bg-emerald-600 rounded-xl hover:bg-emerald-700 py-2 px-2" type="submit" value="Надіслати" />
					</div>
				</form>
			</div>
		</div>
	)
}

export default ContactForm
