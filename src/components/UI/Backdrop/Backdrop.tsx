import { MouseEvent, PropsWithChildren } from 'react';
import { ClientPortal } from '../ClientPortal';
import classes from './Backdrop.module.css';
import type { IBackdropProps } from './Backdrop.d';

export const Backdrop = ({ children, onClick }: PropsWithChildren<IBackdropProps>) => {
	const handleOnClickBackdrop = (event: MouseEvent<HTMLDivElement>) => {
		// @ts-ignore
		if (event.target.id === 'backdrop-content') {
			onClick && onClick();
		}
	};

	return (
		<ClientPortal selector='modal'>
			<div onClick={handleOnClickBackdrop} className={classes.Backdrop}>
				<div id='backdrop-content' className={classes.BackdropContent}>
					{children}
				</div>
			</div>
		</ClientPortal>
	);
};
