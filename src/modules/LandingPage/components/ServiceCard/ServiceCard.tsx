import classes from './ServiceCard.module.css';
import { IServiceCardProps } from './ServiceCard.d';
import cn from 'classnames';

export const ServiceCard = ({
	title,
	description,
	color,
	additionalClassName,
	explanationBottom = '',
}: IServiceCardProps) => (
	<div className={cn(classes.Card, classes[`Card--${color}`], additionalClassName)}>
		<div className={classes.Content}>
			<h3 className={classes.H3}>{title}</h3>

			<p className={classes.P} dangerouslySetInnerHTML={{ __html: description }} />

			{!!explanationBottom && <span className={classes.ExplanationBottom}>{explanationBottom}</span>}
		</div>
	</div>
);
