import { ReactNode } from 'react';

export interface IOption {
	icon: ReactNode;
	title: string;
}

export type OptionsType = IOption[];

export interface IJobCardProps {
	id: number;
	srcImg: string | null;
	nameJob: string;
	options: OptionsType;
}
