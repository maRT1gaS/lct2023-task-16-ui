import Head from 'next/head';
import { LandingPage as LandingPageCmp } from '@/modules';
import type { GetStaticProps } from 'next';
import { getJobs, getStatsPlatform } from '@/api';
import { SWR_KEYS } from '@/constants';
import { unstable_serialize } from 'swr';

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

	const getAllJobsQueryParams = { limit: 3 };
	const landingJobs = await getJobs(getAllJobsQueryParams);

	return {
		revalidate: 60,
		props: {
			fallback: {
				[SWR_KEYS.StatsPlatform]: statsPlatform,
				[unstable_serialize({ key: SWR_KEYS.GetAllJobs, query: getAllJobsQueryParams })]: landingJobs,
			},
		},
	};
};
