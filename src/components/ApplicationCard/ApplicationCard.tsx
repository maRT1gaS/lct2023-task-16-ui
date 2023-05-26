import { Title, Link, CalendarIcon, NextImage, LocationIcon, ClockIcon } from '@/ui';
import type { IApplicationProps } from './ApplicationCard.d';
import classes from './ApplicationCard.module.css';

export const ApplicationCard = () =>
	// { title, dates, time, status }: IApplicationProps
	{
		return (
			<div className={classes.card}>
				<div className={classes.img}>
					<NextImage alt='' format='rectangular' src='/images/gradient.png' width={384} />
				</div>
				<div className={classes.description}>
					<Title headline='h6'>
						{/* {title} */}
						Название
					</Title>
					<span className={classes.detail}>
						<CalendarIcon />
						{/* {dates} */}
						21-22 июня 2023
					</span>
					<span className={classes.detail}>
						<ClockIcon />
						{/* {time} */}
						10:00 - 16:00
					</span>
					<span className={classes.detail}>
						<LocationIcon />
						{/* {location} */}
						Москва, Тверская ул., д.13
					</span>
					<div className={classes.application}>
						<span>
							{/* {status} */}
							Статус заявки
						</span>
						<Link href='' themeBorder='none'>
							Отозвать заявку
						</Link>
					</div>
				</div>
			</div>
		);
	};
