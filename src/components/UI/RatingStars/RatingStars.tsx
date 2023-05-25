import { LgStarIcon, SmStarIcon } from '../icons';
import type { IRatingStarsProps } from './RatingStars.d';
import classes from './RatingStars.module.css';

export const RatingStars = ({ ratingNum, size, countStars }: IRatingStarsProps) => {
	return (
		<span className={classes.StarsWrap}>
			{new Array(countStars).fill('').map((_, index) => {
				const className = Math.floor(ratingNum) > index ? classes.ActiveStar : classes.DisabledStart;

				return size === 'sm' ? (
					<SmStarIcon key={index} className={className} />
				) : (
					<LgStarIcon key={index} className={className} />
				);
			})}
		</span>
	);
};
