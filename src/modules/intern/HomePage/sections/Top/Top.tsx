import { Container, Link, Title } from '@/ui';
import classes from './Top.module.css';
import { Map } from '../../components/Map/Map';
import { FriendsList } from '@/components/FriendsList';
import { ProfileCard } from '@/components/ProfileCard';

export const Top = () => {
	return (
		<Container>
			<div className={classes.top}>
				<div className={classes.aside}>
					<ProfileCard />
					<FriendsList />
				</div>
				<div className={classes.info}>
					<Title headline='h2'>Фамилия Имя Отчество</Title>
					<div>
						<Title headline='h3'>Текущая стажировка:</Title>
						<Title headline='h3'>
							<Link href='' themeBorder='none'>
								Название стажировки
							</Link>
						</Title>
					</div>
					<div>
						<Title headline='h4'>Твой наставник:</Title>
						<Title headline='h4'>
							<Link href='' themeBorder='none'>
								Ссылка на профиль
							</Link>
						</Title>
					</div>
					<div className={classes.btns}>
						<Link themeBorder='black' href=''>
							Написать наставнику
						</Link>
						<Link themeBorder='black' href=''>
							Открыть расписание
						</Link>
						<Link themeBorder='black' href=''>
							Написать заявление
						</Link>
					</div>
					<Map />
				</div>
			</div>
		</Container>
	);
};
