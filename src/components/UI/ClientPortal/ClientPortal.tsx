import { useRef, useEffect, useState, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import type { IClientPortalProps } from './ClientPortal.d';

export function ClientPortal({ children, selector }: PropsWithChildren<IClientPortalProps>) {
	const ref = useRef<Element | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		ref.current = document.getElementById(selector);
		setMounted(true);
	}, [selector]);

	return mounted && ref.current ? createPortal(children, ref.current) : null;
}
