import NextLink from 'next/link';
import { ILinkProps } from './Link.d';
import { PropsWithChildren } from 'react';
import classes from './Link.module.css';
import cn from 'classnames';

export const Link = ({
	children,
	href,
	className,
	themeBorder,
	scroll = true,
	...linkProps
}: PropsWithChildren<ILinkProps>) => {
	const hasThemeBorder = themeBorder !== 'none';

	return (
		<NextLink
			scroll={scroll}
			href={href}
			className={cn(classes.Link, className, {
				[classes[`LinkBorder`]]: hasThemeBorder,
				[classes[`LinkBorder--${themeBorder}`]]: hasThemeBorder,
			})}
			{...linkProps}
		>
			{children}
		</NextLink>
	);
};
