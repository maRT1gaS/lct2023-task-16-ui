import ReactSelect from 'react-select';
import type { ISelectProps } from './Select.d';
import classes from './Select.module.css';
import cn from 'classnames';
import { FieldLable } from '../FieldLable';

export const Select = ({ className, id, isHiddenLabel = false, labelTitle, ...selectProps }: ISelectProps) => (
	<div>
		<FieldLable id={id} isHiddenLabel={isHiddenLabel} labelTitle={labelTitle} />
		<ReactSelect className={cn(classes.Select, className)} {...selectProps} />
	</div>
);
