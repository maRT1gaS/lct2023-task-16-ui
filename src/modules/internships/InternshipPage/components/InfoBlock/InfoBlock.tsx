import { Title } from '@/ui';
import type { IInfoBlockProps } from './InfoBlock';
import classes from './InfoBlock.module.css';

export const InfoBlock = ({ title, content }: IInfoBlockProps) => (
	<div className={classes.InfoBlock}>
		<Title headline='h4'>{title}</Title>

		<ul className={classes.InfoBlockList}>
			{content.map((val, index) => (
				<li className={classes.InfoBlockListItem} key={`${val}${index}`}>
					- {val}
				</li>
			))}
		</ul>
	</div>
);
