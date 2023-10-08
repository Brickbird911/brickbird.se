import NavigationItem from "./NavigationItem";

export default function Navigation() {
	return (
		<nav className={'rounded-b- bg-[#3B4252] flex flex- items-center'}>
			<NavigationItem name= 'Brickbird' link='/' changa /> 
			<NavigationItem name='Pictures' link='/pictures' />
			<NavigationItem name='Logs' link='/log' />
		</nav>
	);
} 