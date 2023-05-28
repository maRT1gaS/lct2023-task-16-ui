import type { ReactDatePickerProps } from 'react-datepicker';

export interface IDatepickerProps<R extends boolean = false> extends ReactDatePickerProps<never, R> {
	lableTitle: string;
	isHiddenLabel?: boolean;
	id: string;
}
