import Image from 'next/image';
import type { INextImageProps } from './NextImage.d';
import classes from './NextImage.module.css';
import cn from 'classnames';

export const NextImage = ({ alt, src, width, className, format, ...otherProps }: INextImageProps) => (
	<Image className={cn(className, classes[`Border--${format}`])} alt={alt} src={src} width={width} {...otherProps} />
);
