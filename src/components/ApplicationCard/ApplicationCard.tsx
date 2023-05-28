import { Title, Link, CalendarIcon, NextImage, LocationIcon, ClockIcon } from '@/ui';
// import type { IApplicationProps } from './ApplicationCard.d';
import classes from './ApplicationCard.module.css';

export const ApplicationCard = () =>
	// { title, dates, time, status }: IApplicationProps
	{
		return (
			<div className={classes.card}>
				<div className={classes.img}>
					<NextImage alt='' format='rectangular' src='/images/gradient.png' width={384} height={200} />
				</div>
				<div className={classes.description}>
					<Title headline='h6'>
						{/* {title} */}
						Название
					</Title>
					<span className={classes.detail}>
					<svg xmlns="http://www.w3.org/2000/svg" width='30px' height='30' viewBox="0 0 50 50" fill="#FFBE55">
						<path d="M 12 0 C 10.90625 0 10 0.90625 10 2 L 10 4 L 4 4 C 3.476563 4 2.945313 4.191406 2.570313 4.570313 C 2.191406 4.945313 2 5.476563 2 6 L 2 46 C 2 46.523438 2.191406 47.054688 2.570313 47.433594 C 2.945313 47.808594 3.476563 48 4 48 L 46 48 C 46.523438 48 47.054688 47.808594 47.433594 47.433594 C 47.808594 47.054688 48 46.523438 48 46 L 48 6 C 48 5.476563 47.808594 4.945313 47.433594 4.570313 C 47.054688 4.191406 46.523438 4 46 4 L 40 4 L 40 2 C 40 0.90625 39.09375 0 38 0 L 36 0 C 34.90625 0 34 0.90625 34 2 L 34 4 L 16 4 L 16 2 C 16 0.90625 15.09375 0 14 0 Z M 12 2 L 14 2 L 14 8 L 12 8 Z M 36 2 L 38 2 L 38 8 L 36 8 Z M 4 6 L 10 6 L 10 8 C 10 9.09375 10.90625 10 12 10 L 14 10 C 15.09375 10 16 9.09375 16 8 L 16 6 L 34 6 L 34 8 C 34 9.09375 34.90625 10 36 10 L 38 10 C 39.09375 10 40 9.09375 40 8 L 40 6 L 46 6 L 46 13 L 4 13 Z M 4 15 L 46 15 L 46 46 L 4 46 Z M 10 19 L 10 42 L 40 42 L 40 19 Z M 12 21 L 17 21 L 17 26 L 12 26 Z M 19 21 L 24 21 L 24 26 L 19 26 Z M 26 21 L 31 21 L 31 26 L 26 26 Z M 33 21 L 38 21 L 38 26 L 33 26 Z M 12 28 L 17 28 L 17 33 L 12 33 Z M 19 28 L 24 28 L 24 33 L 19 33 Z M 26 28 L 31 28 L 31 33 L 26 33 Z M 33 28 L 38 28 L 38 33 L 33 33 Z M 12 35 L 17 35 L 17 40 L 12 40 Z M 19 35 L 24 35 L 24 40 L 19 40 Z M 26 35 L 31 35 L 31 40 L 26 40 Z M 33 35 L 38 35 L 38 40 L 33 40 Z" fill="#FFBE55"/>
						</svg>
						{/* {dates} */}
						21-22 июня 2023
					</span>
					<span className={classes.detail}>
						<ClockIcon />
						{/* {time} */}
						10:00 - 16:00
					</span>
					<span className={classes.detail}>
					<svg xmlns="http://www.w3.org/2000/svg" width='30px' height='30' viewBox="0 0 50 50" fill="#FFBE55">
						<path d="M 25 1 C 16.160156 1 9 8.160156 9 17 C 9 24.308594 12.859375 32.164063 16.65625 38.25 C 20.453125 44.335938 24.25 48.65625 24.25 48.65625 C 24.441406 48.871094 24.714844 48.996094 25 48.996094 C 25.285156 48.996094 25.558594 48.871094 25.75 48.65625 C 25.75 48.65625 29.550781 44.246094 33.34375 38.125 C 37.136719 32.003906 41 24.167969 41 17 C 41 8.160156 33.839844 1 25 1 Z M 25 3 C 32.761719 3 39 9.238281 39 17 C 39 23.433594 35.363281 31.082031 31.65625 37.0625 C 28.550781 42.074219 25.921875 45.300781 25 46.40625 C 24.070313 45.308594 21.441406 42.152344 18.34375 37.1875 C 14.640625 31.25 11 23.589844 11 17 C 11 9.238281 17.238281 3 25 3 Z M 25 11 C 21.144531 11 18 14.144531 18 18 C 18 21.855469 21.144531 25 25 25 C 28.855469 25 32 21.855469 32 18 C 32 14.144531 28.855469 11 25 11 Z M 25 13 C 27.773438 13 30 15.226563 30 18 C 30 20.773438 27.773438 23 25 23 C 22.226563 23 20 20.773438 20 18 C 20 15.226563 22.226563 13 25 13 Z" fill="#FFBE55"/>
						</svg>
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
