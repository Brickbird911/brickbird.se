import Image from "next/image";
import Link from "next/link";

export default function Background(){
    return(
    <main className={'text-slate-600 m-2 text-xl'}>
		<h1>Aviation</h1>
		<div className="flex flex-row m-2 gap-2">
			<Link href="/img/plane1">
				<Image alt='plane' src="/plane1.png" width={400} height={265} />
			</Link>
			<Link href="/img/plane2">
				<Image alt='plane' src="/plane2.png" width={400} height={265} />
			</Link>
			<Link href="/img/plane3">
				<Image alt="plane" src="/plane3.png" width={400} height={265}/>
			</Link>
		</div>
		<h1>Nature</h1>
		<div className='flex flex-row m-2 gap-2'>
			<Link href="/img/nature1">
				<Image alt="nature" src="/nature1.png" width={400} height={265}/>
			</Link>
		</div>
	</main>
    )
}