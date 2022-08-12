import React from 'react';

import styles from './index.module.css';

const MONTH = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

function EmploymentCard({ title, employer, description, startMonth, startYear, endMonth, endYear }) {
	return(

		<article className={ styles.job }>
			<h5 className={ styles.job__title }>{ employer } - { title }</h5>
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
			<ul>
				<li className={ styles.job__description }>{ description }</li>
			</ul>
		</article>
	);
}

export { EmploymentCard }