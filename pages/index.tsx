import Topnav from "@/components/Topnav";
import Head from "next/head";

export default function Index() {
	return (
		<>
			<Head>
				<title>Home | Brickbird.se</title>
			</Head>
			<main className="w-screen h-screen bg-white dark:bg-[#080713] p-0 m-0">
				<Topnav />
			</main>
		</>
	)
}