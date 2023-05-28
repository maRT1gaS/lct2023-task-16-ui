import cn from 'classnames';
import classes from './FieldLable.module.css';
import type { IFieldLableProps } from './FieldLable.d';

export const FieldLable = ({ id, isHiddenLabel, labelTitle }: IFieldLableProps) => (
	<label
		className={cn(classes.Label, {
			[classes.LabelHidden]: isHiddenLabel,
		})}
		htmlFor={id}
	>
		{labelTitle}
	</label>
);
