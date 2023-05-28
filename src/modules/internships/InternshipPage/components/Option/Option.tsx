import type { IOptionProps } from './Option';
import classes from './Option.module.css';

export const Option = ({ title, icon }: IOptionProps) => (
	<div className={classes.Option}>
		<span className={classes.Optionicon}>{icon}</span>

		<span className={classes.OptionTitle}>{title}</span>
	</div>
);
