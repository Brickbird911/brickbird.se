import Link from "next/link";
import {style} from "@/styles/navbar"

export default function Navigation() {
	return (
		<nav>
			<style>
				link {
					display: block;
				}
			</style>
			<Link href={'/'}>Home</Link>
			<Link href={'/about'}>About</Link>
		</nav>
	);
} 