import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
	return(
		<main className="w-screen h-screen bg-[#080713] p-0 m-0">
			<Nav />
			<div className='w-screen h-5/6 flex items-center justify-center'>
				<div className='w-4/6 h-5/6 bg-slate-100 dark:bg-[#1f1d2e] text-black dark:text-white flex rounded-lg'>
					<div className='m-3'>
						<a>This is an homepage</a>
					</div>
				</div>
			</div>
		</main>
	)
}