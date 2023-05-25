import { MouseEvent, PropsWithChildren, useEffect } from 'react';
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

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

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
