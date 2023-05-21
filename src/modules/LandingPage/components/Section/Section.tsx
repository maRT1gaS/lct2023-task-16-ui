import { PropsWithChildren } from 'react';
import classes from './Section.module.css';
import type { ISectionProps } from './Section.d';
import { Title } from '@/ui';

export const Section = ({ children, title, id }: PropsWithChildren<ISectionProps>) => (
	<section id={id} className={classes.Section}>
		<div className={classes.SectionHeader}>
			<Title headline='h2'>{title}</Title>
		</div>

		<div className={classes.SectionContent}>{children}</div>
	</section>
);
