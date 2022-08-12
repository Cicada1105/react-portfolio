import React, { useEffect, useState } from 'react';

import { ProjectCard } from './project-card.jsx';

const LARAVEL_URL = "http://127.0.0.1:8000/api";

function Projects() {
	const [projects, setProjects] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`/projects.json`).then(response => response.json()).then(data => {
			setProjects([...data]);
		}).catch(err => {
			console.log(err);
		}).finally(() => {
			setLoading(false);
		})
	});

	const sectionStyling = {
		flexWrap: "wrap",
		justifyContent: "space-between"
	}
	return(
		<main className="page-content">
			<h1 className="page-content__title">Projects</h1>
			<hr />

			<section style={sectionStyling} className="flex-container">
			{
				isLoading ? 
				<h2 style={{ margin: "auto" }}>Loading...</h2> :
				projects.map(project => <ProjectCard key={ project.id } 
					image={ project.image }  
					title={ project.title}
					liveUrl={ project.live_url }
					githubUrl={ project.github_url }
					content={ project.content }
				/>)
			}
			</section>
		</main>
	);
}

export { Projects }