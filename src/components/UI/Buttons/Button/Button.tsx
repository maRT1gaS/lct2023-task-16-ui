import { PropsWithChildren } from 'react';
import type { IButtonProps } from './Button.d';
import classes from './Button.module.css';
import cn from 'classnames';

export const Button = ({
	children,
	themeBorder,
	additionalClassName,
	type,
	...buttonProps
}: PropsWithChildren<IButtonProps>) => {
	const hasThemeBorder = themeBorder !== 'none';

	return (
		<button
			className={cn(classes.Button, additionalClassName, {
				[classes[`ButtonBorder`]]: hasThemeBorder,
				[classes[`ButtonBorder--${themeBorder}`]]: hasThemeBorder,
			})}
			type={type}
			{...buttonProps}
		>
			{children}
		</button>
	);
};
