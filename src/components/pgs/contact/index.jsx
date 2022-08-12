import React from 'react';

import styles from './index.module.css';

function Contact() {
	const contactLinksStyles = {
		backgroundColor: "var(--secondary-bg-color)",
		alignItems: "center",
		borderRadius: "2rem",
		marginTop: "5rem",
		padding: "1rem"
	}
	return(
		<main className="page-content">
			<h1>Contact Page</h1>
			<hr />
			<p className={ styles.contact__message }>You can easily reach me at the email below, or see what I'm up to on Instagram and LinkedIn</p>
			<section style={ contactLinksStyles } className="flex-container">
				<figure className={ styles.contactLink }>
					<img src="/imgs/contact/contact-email.svg" alt="Email Icon" />
					<figcaption>JoshuaIColvin@gmail.com</figcaption>
				</figure>
				<figure className={ styles.contactLink }>
					<img src="/imgs/contact/contact-github.svg" alt="Github Icon" />
					<figcaption>Cicada1105</figcaption>
				</figure>
				<figure className={ styles.contactLink }>
					<img src="/imgs/contact/contact-instagram.svg" alt="Instagram Icon" />
					<figcaption>@JRC_Fullstack</figcaption>
				</figure>
				<figure className={ styles.contactLink }>
					<img src="/imgs/contact/contact-linkedin.svg" alt="LinkedIn Icon" />
					<figcaption>Joshua Colvin</figcaption>
				</figure>
			</section>
		</main>
	);
}

export { Contact }