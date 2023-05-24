import { PropsWithChildren } from 'react';
import classes from './InternLayout.module.css';
import { Footer, Header, Main } from './components';
import type { IInternLayoutProps } from './InternLayout.d';

export const InternLayout = ({ children, headerChildren }: PropsWithChildren<IInternLayoutProps>) => {
	return (
		<div className={classes.LandingLayout}>
			<Header>{headerChildren}</Header>
			<Main>{children}</Main>
			<Footer />
		</div>
	);
};
