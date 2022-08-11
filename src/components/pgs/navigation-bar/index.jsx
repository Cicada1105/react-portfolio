import React from 'react';

import { Logo } from './logo';
import { Navigation } from './navigation';
import { Contact } from './contact';

function NavigationBar() {
	return (
		<header className="flex-container page-header">
			<Logo />
			<Navigation />
			<Contact />
		</header>
	)
}

export default NavigationBar;