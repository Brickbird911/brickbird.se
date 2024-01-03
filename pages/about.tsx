import Nav from '@/components/Nav'
import Image from 'next/image'

export default function About() {
	return(
		<main className="w-screen h-screen m-0 p-0 text-[#e11c44] overflow-hidden">
			<Image 
				src="/images/img.jpg"
				alt="hej"
				width={500}
				height={500}
			/>
			<Nav />
			<div className="h-full w-full bg-purple-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
				<p>hej</p>
			</div>
			<div>
				<p>hi</p>
			</div>
		</main>
	)
}