import Link from "next/link";

export default function Notfound () {
	return (
		<main className="h-screen w-screen bg-black text-white">
			<a>Since you cant type the URL right here is all the links!</a>
			<div className="flex justify-center align-middle font-medium mt-4">
				<div className="border-2">
					<Link href="/">Home</Link>
				</div>
			</div>
			<div className="flex justify-center align-middle font-medium mt-2">
				<div className="border-2">
					<Link href="/photography">Photo album</Link>
				</div>
			</div>
			<div className="flex justify-center align-middle font-medium mt-2">
				<div className="border-2">
					<Link href="/about">About</Link>
				</div>
			</div>
		</main>
	)
}