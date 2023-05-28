import type { ReactDatePickerProps } from 'react-datepicker';

export interface IRangeDatepickerProps extends ReactDatePickerProps {
	id: string;
	lableTitle: string;
	isHiddenLable?: boolean;
	onChange: (val: RangeDateType) => void;
}

export type RangeDateType = [DateType, DateType];

export type DateType = Date | null;
