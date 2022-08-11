import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function NavigationBar() {
	return (
		<header>NavigationBar</header>
	);
}

function NavigationComponent() {
	return(
		<React.Fragment>
			<NavigationBar />
			<Outlet />
		</React.Fragment>
	);
}

export { NavigationComponent }