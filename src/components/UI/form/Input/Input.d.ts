import { ReactNode, HTMLAttributes } from 'react';

export interface IInputProps extends HTMLAttributes<HTMLInputElement> {
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	id: string;
}
