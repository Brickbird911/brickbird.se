import Navigation from "@/components/Navigation"
import Background from "@/components/Background";
import Colorsindex from "@/components/Colorsindex";
import Image from "next/image";

export default function Index() {
	return (
		<main className="h-screen">
			<Navigation />
			<Image alt="Background" src="/Untitled(1).jpg" width={2040} height={4050}/>
		</main>
	);
}