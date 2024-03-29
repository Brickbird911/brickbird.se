import Noctuanav from "@/components/Noctuanav"
import Image from "next/image"
import Head from "next/head"

export default function Noctua () {
	return (
		<>
			<Head>
				<title>Noctua | Brickbird.se</title>
			</Head>
			<main className="w-screen h-screen text-[#582C0C] bg-[#e7ceb5]">
					<Noctuanav />
					<div className="m-5">
						<a>Noctua makes everything look good no matter what you say.</a>
						<br />
						<a>This page is mainly a easter egg.</a>
						<br />
						<a>The page link will also change every week.</a>
						<div className="float-right">
							<Image src="/noctua.webp" alt="noctua fan" width={500} height={500}></Image>
						</div>
					</div>
			</main>
		</>
	)
}