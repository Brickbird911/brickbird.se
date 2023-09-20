import NavigationItem from "./NavigationItem";

export default function Navigation() {
	return (
		<nav className={'bg-slate-200 flex flex- items-center'}>
			<NavigationItem name= 'Brickbird' link='/' changa /> 
			<NavigationItem name='About' link='/about' />
			<NavigationItem name='Logs' link='/log' />
		</nav>
	);
} 