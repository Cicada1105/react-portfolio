import React from 'react';

function Contact() {
	return (
		<div className="header-contact-section">
			<div className="contact-links">
				<a className="contact-link" href="" target="_blank">
					<img src="/imgs/email.svg" alt="Email Icon" />
				</a>
				<a className="contact-link" href="" target="_blank">
					<img src="/imgs/instagram.svg" alt="Instagram Icon" />
				</a>
				<a className="contact-link" href="" target="_blank">
					<img src="/imgs/linkedin.svg" alt="LinkedIn Icon" />
				</a>
			</div>
			<p className="header__copyright">Copyright &copy; { (new Date()).getFullYear() } JoshColvin.epizy.com</p>
			<p className="header__copyright">All Rights Reserved.</p>
		</div>
	);
}

export { Contact }