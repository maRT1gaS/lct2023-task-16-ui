import { CareerPortalLogo } from '@/ui';
import { PropsWithChildren } from 'react';
import classes from './AdminLayout.module.css';

export const AdminLayout = ({ children }: PropsWithChildren) => {
	return (
		<main className={classes.AdminLayout}>
			<div className={classes.AdminLayoutLeftSide}>
				<div className={classes.AdminLayoutLeftSideHeader}>
					<CareerPortalLogo />
				</div>
			</div>

			<div className={classes.AdminLayoutRightSide}>{children}</div>
		</main>
	);
};
