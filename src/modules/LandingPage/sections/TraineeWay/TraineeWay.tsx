import { Container } from '@/ui';
import { Section } from '../../components';
import { WayCard } from './components';
import classes from './TraineeWay.module.css';
import { sections_ids } from '../../constants';

export const TraineeWay = () => (
	<Section id={sections_ids.SECTION_TRAINEE_WAY_ID} title='Путь стажера'>
		<Container>
			<div className={classes.TraineeWay}>
				<div className={`${classes.Step} ${classes.Step1}`}>
					<WayCard
						numberCard={1}
						positionNumberCard='right'
						title='ЗАЯВКА НА СТАЖИРОВКУ'
						description='Зарегистрируйся* и заполни личный профиль. Открой страницу стажировок, найди то, что подходит тебе, и подай заявку'
						explanationBottom='*Для студентов и выпускников ВУЗов'
						explanationTop='START'
					/>
				</div>
				<div className={`${classes.Step} ${classes.Step2}`}>
					<WayCard
						numberCard={2}
						positionNumberCard='left'
						title='КАРЬЕРНАЯ ШКОЛА'
						description='В течении недели ты будешь просматривать вебинары для знакомства со структурой Правительства Москвы, а также проходить образовательный онлайн-трек с конспектами, тестированиями и видеоэкскурсиями.'
					/>
				</div>
				<div className={`${classes.Step} ${classes.Step3}`}>
					<WayCard
						numberCard={3}
						positionNumberCard='right'
						title='ТЕСТИРОВАНИЕ'
						description='Пройди тестирование по русскому языку, анализу информации и компьютерной грамотности.'
					/>
				</div>
				<div className={`${classes.Step} ${classes.Step4}`}>
					<WayCard
						numberCard={4}
						positionNumberCard='left'
						title='КЕЙС-ЧЕМПИОНАТ'
						description='Войди в число лучших, собери команду, реши кейсы – реальные задачи от организаций Правительства Москвы, презентуй ваше решение перед членами жюри.'
					/>
				</div>
				<div className={`${classes.Step} ${classes.Step5}`}>
					<WayCard
						explanationTop='FINISH'
						numberCard={5}
						positionNumberCard='right'
						title='ТЕСТОВОЕ ЗАДАНИЕ И СОБЕСЕДОВАНИЕ'
						description='Посети марафон работодателей, где в экспресс-формате ты познакомишься с доступными для прохождения стажировки организациями. Выполни тестовое задание и пройди собеседование'
					/>
				</div>
			</div>
		</Container>
	</Section>
);
