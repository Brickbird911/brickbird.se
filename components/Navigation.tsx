import NavigationItem from "./NavigationItem";

export default function Navigation() {
	return (
		<nav className={'bg-slate-200 flex flex- items-center rounded-full m-2'}>
			<NavigationItem name= 'Brickbird' link='/' changa /> 
			<NavigationItem name='Pictures' link='/pictures' />
			<NavigationItem name='Logs' link='/log' />
		</nav>
	);
} 