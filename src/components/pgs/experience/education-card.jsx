import React, { useEffect } from 'react';

import styles from './index.module.css';

const MONTH = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

function EducationCard({ institutionName, degreeType, degree, startMonth, startYear, endMonth, endYear }) {
	return(
		<article className="university">
			<h5 className={ styles.university__title }>{ institutionName } - { degreeType }</h5>
			<div className={ styles.degree }>
				<h6 className={ styles.degree__label }>Degree:</h6>
				<span className={ styles.degree__title }>{ degree }</span>
			</div>
			<time dateTime={startYear + "-" + (MONTH.findIndex(m => m === startMonth) + 1)}>
				{
					startMonth[0].toUpperCase() + startMonth.slice(1) + " " + startYear
				}
			</time> - 
			{
				!endMonth ?
				"Current":
				<time dateTime={endYear + "-" + (MONTH.findIndex(m => m === endMonth) + 1)}>
					{
						endMonth[0].toUpperCase() + endMonth.slice(1) + " " + endYear
					}
				</time>
			}
		</article>
	);
}

export { EducationCard }