import Image from "next/image";
import Link from "next/link";

export default function topnav () {
	return (
		<div className="w-screen flex items-center h-16 text-black dark:text-white bg-slate-200 dark:bg-[#161425]">
			<Link className="ml-5" href="/">Home</Link>
			<div className="flex-1"></div>
			<div className="flex">
					<Image src="/android-chrome-512x512.png" alt="logo" width={50} height={50}></Image>
			</div>
			<div className="flex-1"></div>
			<div className="ml-auto order-2 mr-5">
				<Link href="/about">About</Link>
			</div>
		</div>
	)
}