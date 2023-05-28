export interface IRangeDatepickerProps {
	id: string;
	lableTitle: string;
	isHiddenLable?: boolean;
	onChange: (val: RangeDateType) => void;
}

export type RangeDateType = [DateType, DateType];

export type DateType = Date | null;
