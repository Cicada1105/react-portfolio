import React from 'react';
import styles from './index.module.css';

function Home() {
	return (
		<main className={ styles.pageContent }>
			<img src="/imgs/logo.svg" alt="Joshua Colvin Rubik's Logo" width="100" />
			<h1 className={ styles.greeting }>Hi, glad you're here!<br />I'm Josh, and I build websites.</h1>

			<a className={ styles.projectsLink } href="/pgs/projects">Learn more about what I do</a>
		</main>
	);
}

export { Home }