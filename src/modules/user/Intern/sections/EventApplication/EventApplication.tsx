import { Container, Title } from '@/ui';
import classes from './EventApplication.module.css';
import { ApplicationCard } from '@/components/ApplicationCard';

export const EventApplication = () => {
	return (
		<Container>
			<div className={classes.section}>
				<Title headline='h3'>Заявки на посещение мероприятий</Title>
				<div className={classes.cards}>
					<ApplicationCard/>
					<ApplicationCard/>
					<ApplicationCard/>
				</div>
			</div>
		</Container>
	);
};
