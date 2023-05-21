import type { IStatsListCardProps } from './StatsListCard.d';
import { StatsCard } from '@/ui';
import classes from './StatsListCard.module.css';

export const StatsListCard = ({ stats }: IStatsListCardProps) => (
	<ul className={classes.List}>
		{stats.map(({ title, count, id }) => (
			<StatsCard title={title} count={count} key={id} />
		))}
	</ul>
);
