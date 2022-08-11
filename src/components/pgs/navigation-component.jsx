import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import NavigationBar from './navigation-bar';

function NavigationComponent() {
	return(
		<React.Fragment>
			<NavigationBar />
			<Outlet />
		</React.Fragment>
	);
}

export { NavigationComponent }