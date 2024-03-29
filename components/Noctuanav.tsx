import Image from "next/image";
import Link from "next/link";

export default function noctuanav () {
	return (
		<div className="w-screen flex items-center h-16 text-[#e7ceb5] bg-[#653024]">
			<Link className="ml-5" href="/">Home</Link>
			<div className="flex-1"></div>
			<div className="flex">
				<Link href="/noctua">
					<Image src="/android-chrome-512x512.png" alt="logo" width={50} height={50}></Image>
				</Link>
			</div>
			<div className="flex-1"></div>
			<div className="ml-auto order-2 mr-5">
				<Link href="/about">About</Link>
			</div>
		</div>
	)
}