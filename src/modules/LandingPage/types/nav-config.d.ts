import { ReactNode } from 'react';

interface INavConfig {
	title: ReactNode;
	href: string;
	id: string | number;
	scroll?: boolean;
}

export type NavConfigsType = INavConfig[];
