import { BriefcaseIcon, CalendarIcon, Container, JobCard, Link } from '@/ui';
import { Section } from '../../components';
import { LinkTagsType } from '@/types';
import classes from './TraineeInterests.module.css';
import useSWR from 'swr';
import { getJobs } from '@/api';
import { SWR_KEYS, directionsTags } from '@/constants';
import dayjs from 'dayjs';
import { TagsFilter } from '@/components';
import { sections_ids } from '../../constants';

export const TraineeInterests = () => {
	const { data: jobsData } = useSWR({ key: SWR_KEYS.GetAllJobs, query: { limit: 3 } }, ({ query }) => getJobs(query));

	const linkTags: LinkTagsType = directionsTags.map(({ title, id }) => {
		return { title, to: `/internships?tags=${id}`, id };
	});

	const landingMappedJobData =
		jobsData?.jobs.map(({ id, imgSrc, nameJob, nameOrg, startOfSelection, endOfSelection }) => {
			const optionDate = `${dayjs(startOfSelection).locale('ru').format('DD MMMM')} - ${dayjs(endOfSelection)
				.locale('ru')
				.format('DD MMMM YYYY')}`;

			const options = [
				{
					icon: <BriefcaseIcon />,
					title: nameOrg,
				},
				{
					icon: <CalendarIcon />,
					title: optionDate,
				},
			];

			return {
				id,
				imgSrc,
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
						{landingMappedJobData.map(({ id, imgSrc, nameJob, options }) => (
							<JobCard key={id} srcImg={imgSrc} id={id} nameJob={nameJob} options={options} />
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
