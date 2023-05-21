import type { IButtoniconProps } from './ButtonIcon.d';
import classes from './ButtonIcon.module.css';
import cn from 'classnames';

export const ButtonIcon = ({ icon, onClick, buttonSize, borderRound }: IButtoniconProps) => (
	<button
		type='button'
		onClick={onClick}
		className={cn(classes.ButtonIcon, classes[`ButtonIcon--${buttonSize}`], {
			[classes.BorderRound]: borderRound,
		})}
	>
		{icon}
	</button>
);
