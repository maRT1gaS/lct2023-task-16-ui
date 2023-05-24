import { InternLayout } from '@/layouts';
import { Container, Title } from '@/ui';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import classes from './InternshipPage.module.css';
import { useInternshipPage } from './hooks/useInternshipPage';
import { InfoBlock } from './components';

export const InternshipPage = () => {
	const { detailedJob, error } = useInternshipPage();

	if (error || !detailedJob) {
		return null;
	}

	return (
		<InternLayout>
			<Container>
				<div className={classes.Grid}>
					<div></div>
					<div>
						<Title headline='h1'>{detailedJob.nameJob}</Title>

						<div className={classes.Content}>
							<InfoBlock title='Обязанности:' content={detailedJob.responsibilities} />
							<InfoBlock title='Требования:' content={detailedJob.requirements} />
							<InfoBlock title='Условия:' content={detailedJob.conditions} />

							<YMaps>
								<Map
									width='100%'
									defaultState={{
										center: [detailedJob.coordinates.latitude, detailedJob.coordinates.longitude],
										zoom: 15,
									}}
								>
									<Placemark geometry={[detailedJob.coordinates.latitude, detailedJob.coordinates.longitude]} />
								</Map>
							</YMaps>
						</div>
					</div>
				</div>
			</Container>
		</InternLayout>
	);
};
