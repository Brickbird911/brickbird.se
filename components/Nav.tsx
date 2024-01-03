import Link from "next/link";

export default function Nav () {
	return (
		<div className="w-screen m-3">
			<Link href="/">Home</Link>
			<div className="float-right mr-5">
				<Link href="/about">About</Link>
			</div>
		</div>
	)
}