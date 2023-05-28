import type { ImageProps } from 'next/image';

export interface INextImageProps extends ImageProps {
	format: 'round' | 'rectangular';
	src: string | null;
}
