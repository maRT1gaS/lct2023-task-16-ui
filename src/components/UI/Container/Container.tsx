import { PropsWithChildren } from 'react';
import classes from './Container.module.css';

export const Container = ({ children }: PropsWithChildren) => <div className={classes.Container}>{children}</div>;
