import classes from './Input.module.css';
import type { IInputProps } from './Input.d';
import cn from 'classnames';
import { FieldLable } from '../FieldLable';
import { forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, IInputProps>(
	({ leftIcon, rightIcon, id, className, disabled, labelTitle, isHiddenLabel = false, ...inputProps }, ref) => {
		return (
			<div className={cn(classes.InputWrapper, className)}>
				{labelTitle && <FieldLable labelTitle={labelTitle} isHiddenLabel={isHiddenLabel} id={id} />}

				<div className={classes.InputIconWrap}>
					{leftIcon && <span className={`${classes.IconWrap} ${classes.LeftIcon}`}>{leftIcon}</span>}

					<input
						ref={ref}
						id={id}
						disabled={disabled}
						className={cn(classes.Input, {
							[classes['Input--left-icon']]: leftIcon,
							[classes['Input--right-icon']]: rightIcon,
						})}
						{...inputProps}
					/>

					{rightIcon && <span className={`${classes.IconWrap} ${classes.RightIcon}`}>{rightIcon}</span>}
				</div>
			</div>
		);
	}
);

Input.displayName = 'Input';
