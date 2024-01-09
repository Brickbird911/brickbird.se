import Link from "next/link";

export default function Notfound () {
	return (
		<main className="bg-slate-100 dark:bg-black dark:text-white h-screen flex items-center justify-center flex-col">
			<div className="text-5xl mb-5">
				<h1>
					404 Not found
				</h1>
			</div>
			<h1>
				Here is a useless page to say that you wrote the url wrong.
			</h1>
			<h1>
				If you still dont understand google it or something.
			</h1>
			<Link className="mt-5" href="/">Take Me Home</Link>
		</main>
	)
}