import Link from "next/link";

export default function Navigation() {
	return (
		<nav>
			<Link href={'/'}>home</Link>
			<Link href={'/about'}>ABOUT</Link>
		</nav>
	);
}