import { HTMLAttributes } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
	themeBorder: 'black' | 'red' | 'none';
	type: 'button' | 'submit' | 'reset';
}
