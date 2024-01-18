import Topnav from "@/components/Topnav"
import Head from "next/head"

export default function changelog () {
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
							<a>Changed link and color theme on the noctua page.</a>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}