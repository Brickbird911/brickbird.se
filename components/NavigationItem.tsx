import Link from "next/link";

export default function NavigationItem({ name = '', link = '' }) {
	return (
		<Link href={link} className='text-white bg-black hover:bg-cyan-700 p-2 rounded-xl'>
			<span>{name}</span>
		</Link>
	);
} 