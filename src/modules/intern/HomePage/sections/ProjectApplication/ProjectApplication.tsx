import { Container, Title } from '@/ui';
import classes from './ProjectApplication.module.css';
import { ApplicationCard } from '@/components/ApplicationCard';

export const ProjectApplication = () => {
	return (
		<Container>
			<div className={classes.section}>
				<Title headline='h3'>Заявки на участие в карьерных проектах</Title>
				<div className={classes.cards}>
					<ApplicationCard />
					<ApplicationCard />
					<ApplicationCard />
				</div>
			</div>
		</Container>
	);
};
