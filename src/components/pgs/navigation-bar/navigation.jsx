import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function StyledLink({ href, text }) {
	let location = useLocation();
	return (
		<Link to={href} id={ location.pathname === href ? "active" : ""}>{ text }</Link>
	)
}
function Navigation() {
	return (
		<nav className="page-navigation">
			<ul className="flex-container navigation-list">
				<li className="nav-list-item">
					<a href="/">Home</a>
				</li>
				<li className="nav-list-item">
					<StyledLink href="/pgs/projects" text="Projects" />
				</li>
				<li className="nav-list-item">
					<StyledLink href="/pgs/experience" text="Experience" />
				</li>
				<li className="nav-list-item">
					<StyledLink href="/pgs/contact" text="Contact" />
				</li>
			</ul>
		</nav>
	)
}

export { Navigation }