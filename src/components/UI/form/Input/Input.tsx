import classes from './Input.module.css';
import type { IInputProps } from './Input.d';
import cn from 'classnames';

export const Input = ({
	leftIcon,
	rightIcon,
	id,
	className,
	disabled,
	labelTitle,
	isHiddenLabel = false,
	...inputProps
}: IInputProps) => {
	return (
		<span className={cn(classes.InputWrapper, className)}>
			{leftIcon && <span className={`${classes.IconWrap} ${classes.LeftIcon}`}>{leftIcon}</span>}

			<label
				className={cn(classes.Label, {
					[classes.LabelHidden]: isHiddenLabel,
				})}
				htmlFor={id}
			>
				{labelTitle}
			</label>

			<input
				id={id}
				disabled={disabled}
				className={cn(classes.Input, {
					[classes['Input--left-icon']]: leftIcon,
					[classes['Input--right-icon']]: rightIcon,
				})}
				{...inputProps}
			/>

			{rightIcon && <span className={`${classes.IconWrap} ${classes.RightIcon}`}>{rightIcon}</span>}
		</span>
	);
};
