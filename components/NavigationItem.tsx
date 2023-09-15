import Link from "next/link";

import { Changa_One } from 'next/font/google'

const changaOne = Changa_One({
	subsets: ['latin'],
	weight: '400'
});

export default function NavigationItem({ name = '', link = '', changa = false }) {
	return (
		<Link href={link} className={'text-white p-2 bg-black rounded-full m-2 ring-white ring-4 backdrop-blur-lg bg-opacity-30 hover:bg-slate-700 hover:text-white ' + (changa ? changaOne.className + ' text-2xl' : '')}>
			<span>{name}</span>
		</Link>
	);
} 