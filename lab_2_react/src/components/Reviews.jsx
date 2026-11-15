import {useEffect, useState} from "react";

function Review({ reviewData }) {
	console.log(reviewData)
	return (<div className="pb-2">
		<div className="flex flex-row justify-between">
			<h4 className="capitalize font-semibold border-l-4 border-emerald-500 pl-3">{reviewData.name}</h4>
			<span className="text-xs text-slate-500">{reviewData.email}</span>
		</div>
		<p>
			{reviewData.body}
		</p>
	</div>)
}

function Reviews() {
	const [comments, setComments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchComments() {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/posts/11/comments')

				if(!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}

				const data = await response.json();
				setComments(data);
			} catch (err) {
				setError(err.message)
			}
			setLoading(false);
		}
		fetchComments()
	}, [])
	return (
		<section id="reviews" className="space-y-4">
			<h2 className="text-xl font-semibold text-slate-200 border-l-4 border-emerald-500 pl-3">Відгуки</h2>
			<article className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition divide-y divide-slate-800 space-y-2">
				{error != null && <span>Помилка отримання коментарів! {error}</span>}
				{loading ? (<span>Завантаження...</span>) : (
					comments.map((comment,index) => <Review reviewData={comment} key={index}/>)
				)}
			</article>
		</section>
	)
}

export default Reviews
