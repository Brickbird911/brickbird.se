import Topnav from "@/components/Topnav"
import Head from "next/head"

export default function photo () {
	return (
		<>
		<Head>
			<title>Library | Brickbird.se</title>
		</Head>
			<main className="w-screen h-screen bg-black">
				<Topnav />
			</main>
		</>
	)
}