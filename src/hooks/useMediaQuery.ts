import { isBrowser } from '@/constants';
import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
	const getMatches = (query: string): boolean => {
		// Prevents SSR issues
		if (isBrowser) {
			return window.matchMedia(query).matches;
		}
		return false;
	};

	const [matches, setMatches] = useState<boolean>(getMatches(query));

	function handleChange() {
		setMatches(getMatches(query));
	}

	useEffect(() => {
		const matchMedia = window.matchMedia(query);

		// Triggered at the first client-side load and if query changes
		handleChange();

		// Listen matchMedia
		// Before Safari 14, MediaQueryList is based on EventTarget and only supports addListener/removeListener for media queries.
		if (matchMedia.addListener) {
			matchMedia.addListener(handleChange);
		} else {
			matchMedia.addEventListener('change', handleChange);
		}

		return () => {
			// Before Safari 14, MediaQueryList is based on EventTarget and only supports addListener/removeListener for media queries.
			if (matchMedia.removeListener) {
				matchMedia.removeListener(handleChange);
			} else {
				matchMedia.removeEventListener('change', handleChange);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return matches;
};

export default useMediaQuery;
