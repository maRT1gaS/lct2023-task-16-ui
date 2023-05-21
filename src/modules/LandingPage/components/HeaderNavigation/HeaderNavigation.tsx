import { Link } from '@/ui';
import classes from './HeaderNavigation.module.css';
import { useIsomorphicEffect, useMediaQuery } from '@/hooks';
import { DesktopNav, MobileNav } from './components';
import { useState } from 'react';
import type { IHeaderNavigationProps } from './HeaderNavigation.d';
import { LeftSideNavCtxProvider } from '@/context';

export const HeaderNavigation = ({ navConfig }: IHeaderNavigationProps) => {
	const isSmallWindow = useMediaQuery('(max-width: 1200px)');
	const isVerySmallWindow = useMediaQuery('(max-width: 550px)');

	const [isRenderMobile, setIsRenderMobile] = useState(false);
	const [isRenderDesktop, setisRenderDesktop] = useState(true);
	const [whereRenderLinkStartCareer, setWhereRenderLinkStartCareer] = useState<'desktop' | 'mobile'>('desktop');

	const isomorphicEffect = useIsomorphicEffect();

	isomorphicEffect(() => {
		setIsRenderMobile(isSmallWindow);
		setisRenderDesktop(!isSmallWindow);
	}, [isSmallWindow]);

	isomorphicEffect(() => {
		setWhereRenderLinkStartCareer(isVerySmallWindow ? 'mobile' : 'desktop');
	}, [isVerySmallWindow]);

	return (
		<>
			{isRenderDesktop && <DesktopNav navConfig={navConfig} />}

			<div className={classes.HeaderControls}>
				{whereRenderLinkStartCareer === 'desktop' && (
					<Link href='/auth/login' themeBorder='red'>
						Начать карьеру
					</Link>
				)}

				{isRenderMobile && (
					<LeftSideNavCtxProvider>
						<MobileNav navConfig={navConfig} isRenderLinkStartCareer={whereRenderLinkStartCareer === 'mobile'} />
					</LeftSideNavCtxProvider>
				)}
			</div>
		</>
	);
};
