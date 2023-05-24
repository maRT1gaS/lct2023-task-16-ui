import { Title, ImageSample } from "@/ui"
import classes from './FriendsList.module.css'

export const FriendsList = () => {
	return (
		<div className={classes.list}>
			<p className={classes.heading}>
				<Title headline="h6">Друзья</Title>
				<span>3</span>
			</p>
			<div className={classes.friends}>
				<div className={classes.friendItem}>
					<ImageSample />
					<span>Имя Фамилия</span>
				</div>
				<div className={classes.friendItem}>
					<ImageSample />
					<span>Имя Фамилия</span>
				</div>
				<div className={classes.friendItem}>
					<ImageSample />
					<span>Имя Фамилия</span>
				</div>
				<div className={classes.friendItem}>
					<ImageSample />
					<span>Имя Фамилия</span>
				</div>
			</div>
		</div>
	)
}
