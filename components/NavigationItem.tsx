import Link from "next/link";

import { Changa_One } from 'next/font/google'

const changaOne = Changa_One({
	subsets: ['latin'],
	weight: '400'
});

export default function NavigationItem({ name = '', link = '', changa = false }) {
	return (
		<Link href={link} className={' text-slate-50 p-2 m-2 backdrop-blur-lg bg-opacity-30 hover:text-white ' + (changa ? changaOne.className + ' text-2xl' : '')}>
			<span>{name}</span>
		</Link>
	);
} 