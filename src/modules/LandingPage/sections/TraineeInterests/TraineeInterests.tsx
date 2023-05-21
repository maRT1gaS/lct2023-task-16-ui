import { BriefcaseIcon, CalendarIcon, Container, JobCard, Link } from '@/ui';
import { Section } from '../../components';
import { LinkTagsType } from '@/types';
import classes from './TraineeInterests.module.css';
import useSWR from 'swr';
import { getJobs } from '@/api';
import { SWR_KEYS, directions } from '@/constants';
import dayjs from 'dayjs';
import { TagsFilter } from '@/components';
import { sections_ids } from '../../constants';

export const TraineeInterests = () => {
	const { data: jobsData } = useSWR(SWR_KEYS.LandingJobs, getJobs);

	const linkTags: LinkTagsType = directions.map(({ title, id }) => {
		return { title, to: `/internships?tags=${id}`, id };
	});

	const landingMappedJobData =
		jobsData?.jobs.map(({ id, img, nameJob, shortNameOrg, dateEnd, dateStart }) => {
			const optionDate = `${dayjs(dateStart).locale('ru').format('DD MMMM')} - ${dayjs(dateEnd)
				.locale('ru')
				.format('DD MMMM YYYY')}`;

			const options = [
				{
					icon: <BriefcaseIcon />,
					title: shortNameOrg,
				},
				{
					icon: <CalendarIcon />,
					title: optionDate,
				},
			];

			return {
				id,
				img,
				nameJob,
				options,
			};
		}) ?? [];

	return (
		<Section id={sections_ids.SECTION_TRAINEE_INTERESTS_ID} title='Выберите ваши интересы'>
			<Container>
				<div className={classes.Content}>
					<TagsFilter type='link' tags={linkTags} />

					<div className={classes.JobsList}>
						{landingMappedJobData.map(({ id, img, nameJob, options }) => (
							<JobCard key={id} srcImg={img} id={id} nameJob={nameJob} options={options} />
						))}

						<div className={classes.LookAllWrap}>
							<span className={classes.LookAllTitle}>
								еще <span className={classes.LookAllTitleCount}>{jobsData?.length}</span>
							</span>
							<span className={classes.LookAllText}>стажировок доступно на платформе</span>
							<Link href='/internships' themeBorder='black'>
								Смотреть все
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};
