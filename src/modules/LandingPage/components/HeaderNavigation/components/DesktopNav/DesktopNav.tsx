import classes from './DesktopNav.module.css';
import type { IDesktopNavProps } from './DesktopNav';
import { Link } from '@/ui';

export const DesktopNav = ({ navConfig = [] }: IDesktopNavProps) => (
	<nav>
		<ul className={classes.NavList}>
			{navConfig.map(({ title, href, id, scroll = true }) => (
				<li key={id}>
					<Link themeBorder='none' href={href} scroll={scroll}>
						{title}
					</Link>
				</li>
			))}
		</ul>
	</nav>
);
