import { ServiceCard, ServiceCardColorEnum } from '@/modules/LandingPage/components';
import { IWayCardProps } from './WayCard.d';
import classes from './WayCard.module.css';
import cn from 'classnames';

export const WayCard = ({
	title,
	numberCard,
	positionNumberCard,
	description,
	explanationBottom,
	explanationTop = '',
}: IWayCardProps) => (
	<div className={classes.WayCard}>
		{!!explanationTop && <span className={classes.ExplanationTop}>{explanationTop}</span>}

		<span
			className={cn(classes.WayCardNumber, {
				[classes.WayCardLeft]: positionNumberCard === 'left',
				[classes.WayCardRight]: positionNumberCard === 'right',
			})}
		>
			{numberCard}
		</span>

		<ServiceCard
			explanationBottom={explanationBottom}
			color={ServiceCardColorEnum.White}
			title={title}
			description={description}
			additionalClassName={classes.ServiceWayCard}
		/>
	</div>
);
