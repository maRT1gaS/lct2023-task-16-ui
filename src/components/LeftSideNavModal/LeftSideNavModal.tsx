import { Backdrop, ButtonIcon, CloseIcon, MenuIcon } from '@/ui';
import { PropsWithChildren, useRef } from 'react';
import classes from './LeftSideNavModal.module.css';
import cn from 'classnames';
import { useLeftSideNavContext } from '@/context';

export const LeftSideNavModal = ({ children }: PropsWithChildren) => {
	const { isOpen, setIsOpen } = useLeftSideNavContext();

	const modalRef = useRef<HTMLDivElement>(null);

	const handleOnClickClose = () => {
		modalRef.current?.classList.replace(classes.ModalAnimOpen, classes.ModalAnimClose);

		setTimeout(() => {
			setIsOpen(false);
		}, 400);
	};

	const handleOnClick = () => {
		setIsOpen(true);
	};

	return (
		<>
			<ButtonIcon borderRound={false} buttonSize='sm' onClick={handleOnClick} icon={<MenuIcon />} />

			{isOpen && (
				<Backdrop onClick={handleOnClickClose}>
					<div className={cn(classes.ModalNav, classes.ModalAnimOpen)} ref={modalRef}>
						<ButtonIcon
							icon={<CloseIcon withBorder={false} />}
							buttonSize='sm'
							borderRound={false}
							onClick={handleOnClickClose}
						/>

						{children}
					</div>
				</Backdrop>
			)}
		</>
	);
};
