import Link from "next/link";

export default function Nav () {
	return (
		<div className="w-screen flex items-center h-16 text-white bg-[#161425]">
			<Link className="ml-5" href="/">Home</Link>
			<div className="ml-auto order-2 mr-5">
				<Link href="/about">About</Link>
			</div>
		</div>
	)
}