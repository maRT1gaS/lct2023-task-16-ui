import classes from './Title.module.css';
import { ITitleProps } from './Title.d';
import { PropsWithChildren } from 'react';
import cn from 'classnames';

export const Title = ({ headline, children, additionalClassName }: PropsWithChildren<ITitleProps>) => {
	const className = cn(additionalClassName, classes[`Title--${headline}`]);

	switch (headline) {
		case 'h1':
			return <h1 className={className}>{children}</h1>;
		case 'h2':
			return <h2 className={className}>{children}</h2>;
		case 'h3':
			return <h3 className={className}>{children}</h3>;
		case 'h4':
			return <h4 className={className}>{children}</h4>;
		case 'h5':
			return <h5 className={className}>{children}</h5>;
		case 'h6':
			return <h6 className={className}>{children}</h6>;
		default:
			throw new Error(`${headline} is not supported.`);
	}
};
