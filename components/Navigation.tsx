import NavigationItem from "./NavigationItem";

export default function Navigation() {
	return (
		<nav className={'h-16 bg-gradient-to-r from-purple-500 to-pink-500 flex flex-row items-center rounded-full m-2'}>
			<NavigationItem name= 'Brickbird' link='/' changa /> 
			<div className='flex-1'></div>
			<NavigationItem name='About' link='/about' />
			<NavigationItem name='Logs' link='/log' />
		</nav>
	);
} 