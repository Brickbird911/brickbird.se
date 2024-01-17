import Noctuanav from "@/components/Noctuanav"
import Image from "next/image"

export default function Noctua () {
	return (
		<main>
			<div className="w-screen h-screen text-[#582C0C] bg-[#D2B48C]">
				<Noctuanav />
				<div className="m-5">
					<a>Noctua makes everything look good no matter what you say</a>
					<br />
					<a>This page is mainly a easter egg</a>
					<div className="float-right">
						<Image src="/noctua.webp" alt="noctua fan" width={500} height={500}></Image>
					</div>
				</div>
			</div>
		</main>
	)
}