import { PropsWithChildren } from 'react';
import classes from './Main.module.css';

export const Main = ({ children }: PropsWithChildren) => <main className={classes.Main}>{children}</main>;
