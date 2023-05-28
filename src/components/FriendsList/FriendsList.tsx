import { Title, NextImage } from '@/ui';
import classes from './FriendsList.module.css';
// import type { IFriendsProps } from './FriendsList.d';

export const FriendsList = () =>
	// {count, name, photo}: IFriendsProps
	{
		return (
			<div className={classes.list}>
				<p className={classes.heading}>
					<Title headline='h6'>Друзья</Title>
					<span>{/* {count} */}3</span>
				</p>
				<div className={classes.friends}>
					<div className={classes.friendItem}>
						<NextImage alt='' src='/images/gradient.png' format='round' width={50} height={50} />
						<span>
							{/* {name} */}
							Имя Фамилия
						</span>
					</div>
					<div className={classes.friendItem}>
						<NextImage alt='' src='/images/gradient.png' format='round' width={50} height={50} />
						<span>
							{/* {name} */}
							Имя Фамилия
						</span>
					</div>
					<div className={classes.friendItem}>
						<NextImage alt='' src='/images/gradient.png' format='round' width={50} height={50} />
						<span>
							{/* {name} */}
							Имя Фамилия
						</span>
					</div>
					<div className={classes.friendItem}>
						<NextImage alt='' src='/images/gradient.png' format='round' width={50} height={50} />
						<span>
							{/* {name} */}
							Имя Фамилия
						</span>
					</div>
				</div>
			</div>
		);
	};
