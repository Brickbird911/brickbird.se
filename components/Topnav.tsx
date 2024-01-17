import Image from "next/image";
import Link from "next/link";

export default function topnav () {
	return (
		<div className="w-screen flex items-center h-16 text-black dark:text-white bg-slate-200 dark:bg-[#161425]">
			<Link className="ml-5" href="/">Home</Link>
			<div className="align-center">
				<Image src="/android-chrome-512x512.png" alt="logo"></Image>
			</div>
			<div className="ml-auto order-2 mr-5">
				<Link href="/about">About</Link>
			</div>
		</div>
	)
}