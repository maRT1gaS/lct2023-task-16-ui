import Link from 'next/link';
import { ITagButtonProps, ITagLinkProps } from './Tag.d';
import classes from './Tag.module.css';
import { MouseEvent } from 'react';
import cn from 'classnames';

export const TagButton = ({ title, onClick: onHandleOnClick, value, isActive }: ITagButtonProps) => {
	const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
		// @ts-ignore
		const value = event.target.getAttribute('data-value');
		onHandleOnClick(value);
	};

	return (
		<button
			type='button'
			data-value={value}
			className={cn(classes.Tag, {
				[classes.ActiveTag]: isActive,
			})}
			onClick={handleOnClick}
		>
			{title}
		</button>
	);
};

export const TagLink = ({ title, to }: ITagLinkProps) => (
	<Link className={classes.Tag} target='_blank' href={to}>
		{title}
	</Link>
);
