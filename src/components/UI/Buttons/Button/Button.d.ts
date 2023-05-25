import { HTMLAttributes } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
	additionalClassName?: string;
	themeBorder: 'black' | 'red' | 'none';
	type: 'button' | 'submit' | 'reset';
}
