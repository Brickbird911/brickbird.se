import Link from "next/link";

export default function Nav () {
	return (
			<div className="w-screen text-white">
				<Link className="ml-5" href="/">Home</Link>
				<div className="float-right mr-5">
					<Link href="/about">About</Link>
				</div>
			</div>
	)
}