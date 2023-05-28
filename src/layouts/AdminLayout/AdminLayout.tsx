import { CareerPortalLogo } from '@/ui';
import { PropsWithChildren } from 'react';
import classes from './AdminLayout.module.css';

export const AdminLayout = ({ children }: PropsWithChildren) => {
	return (
		<main className={classes.AdminLayout}>
			<div className={classes.AdminLayoutLeftSide}>
				<div className={classes.AdminLayoutLeftSideHeader}>
					<CareerPortalLogo />
					<nav className={classes.AdminLayoutNav}>
						<ul>
							<li>d</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className={classes.AdminLayoutRightSide}>{children}</div>
		</main>
	);
};
