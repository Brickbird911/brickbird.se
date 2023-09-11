import Link from "next/link";
import navbar from "@/styles/navbar"

export default function Navigation() {
	return (
		<nav>
			<Link href={'/'}>Home</Link>
			<Link href={'/about'}>About</Link>
		</nav>
	);
} 