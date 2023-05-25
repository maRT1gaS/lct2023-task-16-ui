import { Container, LocationIcon, Title } from '@/ui';
import classes from './InternshipsPlaces.module.css';

export const InternshipsPlaces = () => {
	return (
		<Container>
			<div className={classes.box}>
				<Title headline='h3'>Карта доступных мест прохождения стажировки</Title>
				<div className={classes.map}>
					<svg width='400' height='400' viewBox='0 0 400 400' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M350.078 138.281H50.3125C44.0993 138.281 39.0625 143.318 39.0625 149.531V350.078C39.0625 356.291 44.0993 361.328 50.3125 361.328H350.078C356.291 361.328 361.328 356.291 361.328 350.078V149.531C361.328 143.318 356.291 138.281 350.078 138.281Z'
							fill='#E4EBF7'
						/>
						<path d='M39.0625 200L101.172 249.589L39.0625 323.828V200Z' fill='#FAAD14' />
						<path
							d='M39.0625 151.073L158.506 248.828L257.031 137.891H48.3526C43.2218 137.891 39.0625 142.057 39.0625 147.196V151.073Z'
							fill='#FF7946'
						/>
						<path
							d='M260.333 318.615C249.609 334.505 243.52 350.395 240.234 361.328H351.648C356.779 361.328 360.938 357.164 360.938 352.027V262.5C338.489 264.05 318.483 269.837 301.31 279.789C285.201 289.114 271.415 302.182 260.333 318.615Z'
							fill='#7CB305'
						/>
						<path
							d='M289.25 258.123C269.855 269.341 253.331 284.927 240.125 304.459C225.234 326.485 218.05 348.435 214.844 360.938H240.555C243.842 350.029 249.934 334.18 260.665 318.304C271.753 301.901 285.547 288.857 301.666 279.534C318.849 269.608 338.867 263.825 361.328 262.289V237.5C334.39 239.09 310.209 246.011 289.25 258.123Z'
							fill='white'
						/>
						<path
							d='M113.281 311.719C86.012 311.718 63.8545 333.701 63.6719 360.938H162.891C162.708 333.701 140.55 311.718 113.281 311.719Z'
							fill='#597EF7'
						/>
						<path
							d='M305.078 144.247C305.078 86.2096 258.123 39.1518 200.166 39.0626C142.909 38.9737 95.8269 85.2607 94.937 142.585C94.452 171.13 105.615 198.638 125.848 218.758H125.724L193.655 291.953C195.419 293.854 197.896 294.93 200.487 294.922C203.078 294.914 205.548 293.822 207.3 291.91L274.283 218.758H274.159C293.981 199.043 305.112 172.218 305.078 144.247Z'
							fill='#597EF7'
						/>
						<path
							d='M200.195 208.984C235.252 208.984 263.672 180.565 263.672 145.508C263.672 110.451 235.252 82.0312 200.195 82.0312C165.138 82.0312 136.719 110.451 136.719 145.508C136.719 180.565 165.138 208.984 200.195 208.984Z'
							fill='white'
						/>
					</svg>
					<ul className={classes.places}>
						<li className={classes.point}>
							<Title headline='h6'>Называние стажировки</Title>
							<div className={classes.item}>
								<LocationIcon />
								<span>Москва, Тверская ул., д.13</span>
							</div>
						</li>
						<li className={classes.point}>
							<Title headline='h6'>Называние стажировки</Title>
							<div className={classes.item}>
								<LocationIcon />
								<span>Москва, Тверская ул., д.13</span>
							</div>
						</li>
						<li className={classes.point}>
							<Title headline='h6'>Называние стажировки</Title>
							<div className={classes.item}>
								<LocationIcon />
								<span>Москва, Тверская ул., д.13</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</Container>
	);
};
