import { isBrowser } from '@/constants';
import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicEffect = () => {
	return isBrowser ? useLayoutEffect : useEffect;
};
