import Head from 'next/head';
import { LandingPage as LandingPageCmp } from '@/modules';
import type { GetStaticProps } from 'next';
import { getJobs, getStatsPlatform } from '@/api';
import { SWR_KEYS } from '@/constants';

const LandingPage = () => (
	<>
		<Head>
			<title>Старт карьеры в Правительстве Москвы</title>
		</Head>

		<LandingPageCmp />
	</>
);

export default LandingPage;

export const getStaticProps: GetStaticProps = async () => {
	const statsPlatform = await getStatsPlatform();
	const landingJobs = await getJobs({ limit: 3 });

	return {
		revalidate: 60,
		props: {
			fallback: {
				[SWR_KEYS.StatsPlatform]: statsPlatform,
				[SWR_KEYS.LandingJobs]: landingJobs,
			},
		},
	};
};
