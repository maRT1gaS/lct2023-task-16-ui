import { useState } from 'react';
import { Datepicker } from '../Datepicker';
import type { IRangeDatepickerProps, DateType, RangeDateType } from './RangeDatepicker.d';
import classes from './RangeDatepicker.module.css';

export const RangeDatepicker = ({ lableTitle, id, isHiddenLable, onChange }: IRangeDatepickerProps) => {
	const [start, setStart] = useState<DateType>(null);
	const [end, setEnd] = useState<DateType>(null);

	const handleOnChange = (val: RangeDateType) => {
		const [start, end] = val;

		setStart(start);
		setEnd(end);

		onChange(val);
	};

	return (
		<Datepicker
			autoComplete='off'
			wrapperClassName={classes.RangeDatepicker}
			lableTitle={lableTitle}
			selected={start}
			startDate={start}
			endDate={end}
			id={id}
			onChange={handleOnChange}
			isHiddenLabel={isHiddenLable}
			selectsRange
		/>
	);
};
