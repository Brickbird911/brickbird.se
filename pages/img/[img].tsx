import Photo from "@/components/Photo";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Img() {
	const router = useRouter();

	return (
		<main className= "flex justify-center items-center w-screen h-screen bg-black">
			<Image alt='image' src={"/" + router.query.img + ".png"} className="w-auto h-[90%]" width={3872} height={2592}/>
		</main>
	)
}