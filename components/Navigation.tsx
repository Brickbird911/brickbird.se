import NavigationItem from "./NavigationItem";

export default function Navigation() {
	return (
		<nav className={'bg-black px-1 py-1 rounded-3xl m-2 flex flex-row items-center'}>
			<NavigationItem name='Brickbird' link='/' changa /> 
			<div className='flex-1'></div>
			<NavigationItem name='About' link='/about' />
			<NavigationItem name='Logs' link='/log' />
		</nav>
	);
} 