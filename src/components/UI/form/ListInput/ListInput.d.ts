import { InputHTMLAttributes } from 'react';

export interface IInputListProps {
	name: string;
	value: string;
	id: string;
	uniquePrefixId: string;
	inputField?: InputHTMLAttributes<HTMLInputElement>;
	onChange: (value: string) => void;
	labelTitle: string;
	isHiddenLabel?: boolean;
}
