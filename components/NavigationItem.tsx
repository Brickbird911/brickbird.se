import Link from "next/link";

import { Changa_One } from 'next/font/google'

const changaOne = Changa_One({
	subsets: ['latin'],
	weight: '400'
});

export default function NavigationItem({ name = '', link = '', changa = false }) {
	return (
		<Link href={link} className={'text-black bg-slate-300 hover:bg-slate-700 hover:text-white p-2 ' + (changa ? changaOne.className + ' text-2xl' : '')}>
			<span>{name}</span>
		</Link>
	);
} 