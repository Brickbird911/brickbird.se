import Topnav from "@/components/Topnav";
import Head from "next/head";
import Link from "next/link";

export default function Index() {
	return (
		<>
			<Head>
				<title>Home | Brickbird.se</title>
			</Head>
			<main className="w-screen h-screen bg-white dark:bg-[#080713] p-0 m-0">
				<Topnav />
				<div className='w-screen h-5/6 flex items-center justify-center'>
					<div className='w-4/6 h-5/6 bg-slate-100 dark:bg-[#1f1d2e] text-black dark:text-white flex rounded-lg'>
						<div className='m-3'>
							<a>Update 0.1</a>
							<br />
							<a>We changed some colors on our pages</a>
							<br />
							<br />
							<Link className="underline" href="/changelog">Full changlog</Link>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}