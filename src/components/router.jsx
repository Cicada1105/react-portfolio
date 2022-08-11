import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './index.jsx';
import { Projects } from './pgs/projects';
import { Experience } from './pgs/experience';
import { Contact } from './pgs/contact';
// NavigationComponent is a component wrapper for all pages other than Home that include the side navigation
import { NavigationComponent } from './pgs/navigation-component';

function WebsiteRouter() {
	return (
		<Routes>
			<Route path="/" element={ <Home /> } />
			<Route path="/pgs" element={ <NavigationComponent /> }>
				<Route path="projects" element={ <Projects /> } />
				<Route path="experience" element={ <Experience /> } />
				<Route path="contact" element={ <Contact /> } />
			</Route>
		</Routes>
    );
}

export default WebsiteRouter;