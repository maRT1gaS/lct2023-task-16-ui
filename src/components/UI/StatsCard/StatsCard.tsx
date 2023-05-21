import type { IStatsCardProps } from './StatsCard.d';
import classes from './StatsCard.module.css';

export const StatsCard = ({ count, title }: IStatsCardProps) => (
	<li className={classes.StatsCard}>
		<div className={classes.StatsCardContent}>
			<span className={classes.StatsCardCount}>{count}</span>

			<span className={classes.StatsCardTitle}>{title}</span>
		</div>
	</li>
);
