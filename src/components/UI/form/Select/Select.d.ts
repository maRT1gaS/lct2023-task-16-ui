import type { Props } from 'react-select';

export interface ISelectProps extends Props {
	id: string;
	className?: string;
	isHiddenLabel?: boolean;
	labelTitle: string;
}
