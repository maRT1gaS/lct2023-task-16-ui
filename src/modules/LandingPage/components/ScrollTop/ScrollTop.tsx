import { ArrowUpCircleIcon } from '@/ui';
import classes from './ScrollTop.module.css';
import { useIsomorphicEffect } from '@/hooks';
import { useState } from 'react';

export const ScrollTop = () => {
	const isomorphicEffect = useIsomorphicEffect();

	const [isVisible, setIsVisible] = useState<boolean>(false);

	const changeVisible = () => {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

		if (scrollTop >= 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	isomorphicEffect(() => {
		window.addEventListener('scroll', changeVisible);

		return () => window.removeEventListener('scroll', changeVisible);
	}, []);

	const handleOnClick = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return isVisible ? (
		<button onClick={handleOnClick} className={classes.ScrollTop}>
			<ArrowUpCircleIcon />
		</button>
	) : null;
};
