import Image from "next/image";
import Link from "next/link";

export default function Background(){
    return(
    <main className={'text-slate-600 m-2 text-xl'}>
		<h1>Aviation</h1>
		<div className="flex flex-row m-2">
			<Link href="/img/plane1">
				<Image alt='plane' src="/DSC_0586.png" width={400} height={265} />
			</Link>
			<Link href="/img/plane2">
				<Image alt='plane' src="/DSC_0559.png" width={400} height={265} />
			</Link>
			<Link href="/img/plane3">
				<Image alt="plane" src="/DSC_0789.png" width={400} height={265}/>
			</Link>
		</div>
		<h1>Nature</h1>
		<div>
			<Link href="/img/nature1">
				<Image alt="nature" src="/DSC_0444-(1).png" width={400} height={265}/>
			</Link>
		</div>
	</main>
    )
}