import { HTMLAttributes } from 'react';

export interface ILinkProps extends HTMLAttributes<HTMLAnchorElement> {
	themeBorder: 'black' | 'red' | 'none';
	href: string;
	scroll?: boolean;
}
