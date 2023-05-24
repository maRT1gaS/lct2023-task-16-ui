import classes from './ProfileCard.module.css'
import { Link, Title, ImageSample } from "@/ui"

export const ProfileCard = () => {
	return (
		<div className={classes.card}>
			<ImageSample />
			<Link themeBorder="black" href=''>Открыть публичный профиль</Link>
			<p>ID пользователя: 616570</p>
			<Title headline="h6">Тип профиля</Title>
			<p className={classes.role}>
				<span className={classes.intern}>Стажер</span>
			</p>
		</div>
	)
}