import { Container, CareerPortalLogo } from '@/ui';
import classes from './Header.module.css';
import { PropsWithChildren } from 'react';
import Link from 'next/link';

export const Header = ({ children }: PropsWithChildren) => {
	return (
		<header className={classes.Header}>
			<Container>
				<div className={classes.HeaderContent}>
					<Link href='/'>
						<CareerPortalLogo />
					</Link>

					{children}
				</div>
			</Container>
		</header>
	);
};
