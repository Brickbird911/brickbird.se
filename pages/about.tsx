import Nav from '@/components/Nav'

export default function About() {
	return(
		<main className="w-screen h-screen bg-white dark:bg-[#080713]">
			<Nav />
			<div className='w-screen h-5/6 flex items-center justify-center'>
				<div className='w-4/6 h-5/6 bg-slate-100 dark:bg-[#1f1d2e] text-black dark:text-white flex rounded-lg'>
					<div className='m-3'>
						<a>This website is designed and developed by Brickbird.</a>
					</div>
				</div>
			</div>
		</main>
	)
}