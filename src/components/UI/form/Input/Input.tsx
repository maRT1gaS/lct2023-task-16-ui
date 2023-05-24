import classes from './Input.module.css';
import type { IInputProps } from './Input.d';
import cn from 'classnames';

export const Input = ({ leftIcon, rightIcon, id, className, ...inputProps }: IInputProps) => {
	return (
		<div className={cn(classes.InputWrapper, className)}>
			{leftIcon && <span className={`${classes.IconWrap} ${classes.LeftIcon}`}>{leftIcon}</span>}
			<input
				id={id}
				className={cn(classes.Input, {
					[classes['Input--left-icon']]: leftIcon,
					[classes['Input--right-icon']]: rightIcon,
				})}
				{...inputProps}
			/>
			{rightIcon && <span className={`${classes.IconWrap} ${classes.RightIcon}`}>{rightIcon}</span>}
		</div>
	);
};
