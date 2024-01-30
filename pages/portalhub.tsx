import Topnav from "@/components/Topnav"
import Link from "next/link"

export default function portalhub () {
	return (
		<main className="bg-[]">
			<Topnav />
			<div className="flex justify-center align-middle font-medium mt-4">
				<div className="border-2">
					<Link href="/">Home</Link>
				</div>
			</div>
			<div className="flex justify-center align-middle font-medium mt-2">
				<div className="border-2">
					<Link href="/photgraphy">Photo album</Link>
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