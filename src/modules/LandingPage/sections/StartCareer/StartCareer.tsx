import { Container, Link, Title } from '@/ui';
import classes from './StartCareer.module.css';

export const StartCareer = () => (
	<section className={classes.Section}>
		<Container>
			<div className={classes.SectionContent}>
				<Title headline='h1' additionalClassName={classes.SectionContentH1}>
					Старт карьеры <br />в Правительстве Москвы
				</Title>

				<Title additionalClassName={classes.SectionContentSpan} headline='h5'>
					для студентов последнего курса, магистрантов, аспирантов и выпускников ВУЗов
				</Title>

				<Link href='/auth/login' themeBorder='black'>
					Начать карьеру
				</Link>
			</div>
		</Container>
	</section>
);
