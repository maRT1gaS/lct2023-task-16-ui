import classes from './ProfileCard.module.css'
import { Link, Title, NextImage } from "@/ui"
import cn from 'classnames';
import type { IProfileCardProps } from './ProfileCard.d';

export const ProfileCard = (
	// { id, role, roleClass }: IProfileCardProps
) => {
	return (
		<div className={classes.card}>
			<NextImage alt='' src='/images/gradient.png' format='round' width={225} />
			<Link themeBorder="black" href=''>Открыть публичный профиль</Link>
			<p>ID пользователя:
				<span>
					{/* {id} */}
					616570
				</span>
			</p>
			<Title headline="h6">Тип профиля</Title>
			<p className={classes.role}>
				<span className={classes.intern
					// cn(`classes.${roleClass}`)
				}>
					{/* {role} */}
					Стажер
				</span>
			</p>
		</div>
	)
}