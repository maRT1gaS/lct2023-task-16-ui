import { MouseEvent, ReactNode } from 'react';

export interface IButtoniconProps {
	icon: ReactNode;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
	buttonSize: 'sm' | 'bg';
	borderRound: boolean;
}
