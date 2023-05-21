import { Container } from '@/ui';
import { Section } from '../../components';
import { StatsListCard, Сandidates } from './components';
import useSWR from 'swr';
import { getStatsPlatform } from '@/api';
import { StatsPlatformType } from '@/types';
import { SWR_KEYS } from '@/constants';
import { sections_ids } from '../../constants';

export const AboutPlatform = () => {
	const { data = [] } = useSWR(SWR_KEYS.StatsPlatform, getStatsPlatform);

	return (
		<Section id={sections_ids.SECTION_ABOUT_PLATFORM_ID} title='О платформе'>
			<Container>
				<StatsListCard stats={data as StatsPlatformType} />
				<Сandidates />
			</Container>
		</Section>
	);
};
