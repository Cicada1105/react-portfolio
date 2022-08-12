import React, { useEffect, useState } from 'react';

import { EmploymentCard } from './employment-card.jsx';
import { EducationCard } from './education-card.jsx';

import styles from './index.module.css';

function Experience() {
	const [employments,setEmployments] = useState([]);
	const [education,setEducation] = useState([]);

	const [isEmploymentLoading, setEmploymentLoading] = useState(true);
	const [isEducationLoading, setEducationLoading] = useState(true);

	useEffect(() => {
		fetch("http://localhost:3000/employment.json").then(response => response.json()).then(data => {
			setEmployments([...data]);
		}).catch(err => {
			console.log(err);
		}).finally(() => {
			setEmploymentLoading(false);
		});
	},[employments]);
	useEffect(() => {
		fetch("http://localhost:3000/education.json").then(response => response.json()).then(data => {
			setEducation([...data]);
		}).catch(err => {
			console.log(err);
		}).finally(() => {
			setEducationLoading(false);
		});
	},[education]);

	return(
		<main className="page-content" style={{ marginBottom: "2rem" }}>
			<h1>Experience</h1>
			<hr />
			<section className={ styles.experience }>
				<h4 className={ styles.experience__title }>Work</h4>
				{
					isEmploymentLoading ?
					<h3>Loading Employment...</h3> :
					employments.map((job, i) => <EmploymentCard key={ i }
							title={ job["title"] }
							employer={ job["employer"] }
							description={ job["description"] }
							startMonth={ job["start_month"] }
							startYear={ job["start_year"] }
							endMonth={ job["end_month"] }
							endYear={ job["end_year"] }
						/>
					)
				}
			</section>
			<section className={ styles.experience }>
				<h4 className={ styles.experience__title }>Education</h4>
				{
					isEducationLoading ? 
					<h3>Loading Education...</h3> :
					education.map((degree, i) => <EducationCard key={ i }
							institutionName={ degree["institution_name"] }
							degreeType={ degree["degree_type"] }
							degree={ degree["degree"] }
							startMonth={ degree["start_month"] }
							startYear={ degree["start_year"] }
							endMonth={ degree["end_month"] }
							endYear={ degree["end_year"] }
						/>
					)
				}
			</section>
		</main>
	);
}

export { Experience }