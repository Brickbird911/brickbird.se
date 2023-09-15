import NavigationItem from "./NavigationItem";

export default function Navigation() {
	return (
		<nav className={'bg-slate-200 flex flex-row items-center'}>
			<NavigationItem name='Brickbird' link='/' changa /> 
			<div className='flex-1'></div>
			<NavigationItem name='About' link='/about' />
			<NavigationItem name='Logs' link='/log' />
		</nav>
	);
} 