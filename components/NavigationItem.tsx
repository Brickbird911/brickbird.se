import Link from "next/link";

import { Changa_One } from 'next/font/google'

const changaOne = Changa_One({
	subsets: ['latin'],
	weight: '400'
});

export default function NavigationItem({ name = '', link = '', changa = false }) {
	return (
		<Link href={link} className={'text-white bg-black hover:bg-slate-700 p-2 rounded-3xl ' + (changa ? changaOne.className + ' text-2xl' : '')}>
			<span>{name}</span>
		</Link>
	);
} 