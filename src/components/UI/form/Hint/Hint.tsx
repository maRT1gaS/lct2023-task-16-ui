import type { IHintProps } from './Hint.d';
import classes from './Hint.module.css';
import cn from 'classnames';

export const Hint = ({ title, type }: IHintProps) => (
	<span className={cn(classes.Hint, classes[`Hint--${type}`])}>{title}</span>
);
