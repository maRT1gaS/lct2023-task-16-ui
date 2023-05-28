import Image from 'next/image';
import type { INextImageProps } from './NextImage.d';
import classes from './NextImage.module.css';
import cn from 'classnames';

export const NextImage = ({ alt, src, width, className, height, format, ...otherProps }: INextImageProps) =>
	src ? (
		<Image
			className={cn(className, classes.Border, classes[`Border--${format}`])}
			alt={alt}
			src={src}
			width={width}
			height={height}
			{...otherProps}
		/>
	) : (
		<div
			style={{ width, height }}
			className={cn(className, classes.Default, classes.Border, classes[`Border--${format}`])}
		/>
	);
