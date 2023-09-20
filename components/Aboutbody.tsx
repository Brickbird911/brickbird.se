import { Changa_One } from "next/font/google"

const changaOne = Changa_One({
	subsets: ['latin'],
	weight: '400'
});


export default function Aboutbody({ name = '', link = '', changa = false }){
	return(
		<main className="text-black text-2xl ">
			<a>This website is made for photographers to share their work with maximum quality</a>
		</main>
	)
}