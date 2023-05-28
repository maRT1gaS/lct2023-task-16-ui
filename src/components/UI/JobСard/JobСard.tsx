import classes from './JobСard.module.css';
import type { IJobCardProps } from './JobСard.d';
import { Title } from '../Title';
import Link from 'next/link';
import { NextImage } from '../NextImage';

export const JobCard = ({ id, srcImg, nameJob, options }: IJobCardProps) => (
	<div className={classes.JobCard}>
		<Link href={`/internships/${id}`} className={classes.LinkJob} />
		<NextImage
			format='rectangular'
			className={classes.JobCardImg}
			sizes='cover'
			src={srcImg}
			alt={nameJob}
			width={290}
			height={230}
		/>

		<div className={classes.JobCardContent}>
			<Title additionalClassName={classes.LimitRowText} headline='h6'>
				{nameJob}
			</Title>

			<ul className={classes.OptionsList}>
				{options.map(({ icon, title }, index) => (
					<li key={index} className={classes.OptionItem}>
						<span className={classes.IconBox}>{icon}</span>
						<span className={`${classes.OptionItemTitle} ${classes.LimitRowText}`}>{title}</span>
					</li>
				))}
			</ul>
		</div>
	</div>
);
