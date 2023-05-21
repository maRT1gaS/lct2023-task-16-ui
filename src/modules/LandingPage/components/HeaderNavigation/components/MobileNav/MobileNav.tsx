import { Link } from '@/ui';
import type { IMobileNavProps } from './MobileNav.d';
import classes from './MobileNav.module.css';
import { LeftSideNavModal } from '@/components';
import { useLeftSideNavContext } from '@/context';

export const MobileNav = ({ navConfig = [], isRenderLinkStartCareer }: IMobileNavProps) => {
	const { setIsOpen } = useLeftSideNavContext();

	const handleOnClickLink = () => {
		setIsOpen(false);
	};

	return (
		<LeftSideNavModal>
			<nav>
				<ul className={classes.NavMobile}>
					{navConfig?.map(({ title, href, id }) => (
						<li key={id}>
							<Link onClick={handleOnClickLink} scroll={false} themeBorder='none' href={href}>
								{title}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			{isRenderLinkStartCareer && (
				<Link themeBorder='red' href='/auth/login'>
					Начать карьеру
				</Link>
			)}
		</LeftSideNavModal>
	);
};
