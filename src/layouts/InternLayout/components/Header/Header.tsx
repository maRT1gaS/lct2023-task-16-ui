import { Container, CareerPortalLogo } from '@/ui';
import classes from './Header.module.css';
import { PropsWithChildren } from 'react';

export const Header = ({ children }: PropsWithChildren) => {
	return (
		<header className={classes.Header}>
			<Container>
				<div className={classes.HeaderContent}>
					<CareerPortalLogo />

					{children}
				</div>
			</Container>
		</header>
	);
};
