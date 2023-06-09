import { InternLayout } from '@/layouts';
import {
	BriefcaseIcon,
	Button,
	CalendarIcon,
	Container,
	LocationIcon,
	NextImage,
	RatingStars,
	SingostIcon,
	Title,
} from '@/ui';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import classes from './InternshipPage.module.css';
import { useInternshipPage } from './hooks/useInternshipPage';
import { InfoBlock, Modal, Option } from './components';
import { getFormatDatePeriod } from '@/utils';
import { directionsTags } from '@/constants';

export const InternshipPage = () => {
	const { detailedJob, error, isOpenModal, handleOnClickButton, handleOnCloseModal, handleOnSubmitForm } =
		useInternshipPage();

	if (error || !detailedJob) {
		return null;
	}

	const directionName = directionsTags.find(({ id }) => id === detailedJob.tag)?.title;

	return (
		<InternLayout>
			<Container>
				<div className={classes.Grid}>
					<div className={classes.LeftAsideBlock}>
						<NextImage
							format='rectangular'
							src={detailedJob.imagePreviewImg}
							alt={detailedJob.nameJob}
							width={280}
							height={210}
							sizes='cover'
						/>
						<div className={classes.LeftAsidBlockContent}>
							<div className={classes.LeftAsidBlockContentRatingWrap}>
								<RatingStars size='lg' ratingNum={detailedJob.rating} countStars={5} />

								<span className={classes.LeftAsidBlockContentRating}>{detailedJob.rating}</span>
							</div>

							<Option
								title='Организатор перевозок, Государственное казенное учреждение города Москвы'
								icon={<BriefcaseIcon />}
							/>

							{directionName && <Option title={`Направление:\n${directionName}`} icon={<SingostIcon />} />}

							<Option
								title={`Период отбора:\n${getFormatDatePeriod(detailedJob.startOfSelection, detailedJob.endOfSelection)}`}
								icon={<CalendarIcon />}
							/>

							<Option
								title={`Длительность стажировки:\n${getFormatDatePeriod(
									detailedJob.startOfTheInternship,
									detailedJob.endOfInternship
								)}`}
								icon={<CalendarIcon />}
							/>

							<Option title={detailedJob.adress} icon={<LocationIcon />} />
						</div>

						<Button onClick={handleOnClickButton} type='button' themeBorder='black'>
							Подать заявку
						</Button>
					</div>
					<div className={classes.RightAsideBlock}>
						<Title headline='h1'>{detailedJob.nameJob}</Title>

						<div className={classes.Content}>
							<InfoBlock title='Обязанности:' content={detailedJob.responsibilities} />
							<InfoBlock title='Требования:' content={detailedJob.requirements} />
							<InfoBlock title='Условия:' content={detailedJob.conditions} />

							{detailedJob.coordinates && detailedJob.coordinates.latitude && detailedJob.coordinates.longitude && (
								<YMaps>
									<Map
										width='99%'
										defaultState={{
											center: [detailedJob.coordinates.latitude, detailedJob.coordinates.longitude],
											zoom: 15,
										}}
									>
										<Placemark geometry={[detailedJob.coordinates.latitude, detailedJob.coordinates.longitude]} />
									</Map>
								</YMaps>
							)}
						</div>
					</div>
				</div>
			</Container>

			{isOpenModal && (
				<Modal
					initialValue={{ nameJob: detailedJob.nameJob, direction: directionName || '' }}
					handleOnSubmitForm={handleOnSubmitForm}
					onClose={handleOnCloseModal}
				/>
			)}
		</InternLayout>
	);
};
