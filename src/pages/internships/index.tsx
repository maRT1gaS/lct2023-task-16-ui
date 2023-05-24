import { getJobs } from '@/api';
import { SWR_KEYS, cookiesNames } from '@/constants';
import { InternshipsPage as InternshipsPageCmp } from '@/modules';
import Head from 'next/head';
import type { GetServerSideProps } from 'next/types';
import { getCookie } from 'cookies-next';
import { unstable_serialize } from 'swr';

const InternshipsPage = () => (
	<>
		<Head>
			<title>Все стажировки в Правительстве Москвы</title>
		</Head>

		<InternshipsPageCmp />
	</>
);

export default InternshipsPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
	const { tags = [], search = '' } = query;

	const validTags = Array.isArray(tags) ? tags : [tags];

	const queryGetAllJobs: { [key: string]: unknown } = {};

	if (validTags.length > 0) {
		queryGetAllJobs['tags'] = validTags;
	}

	if (search) {
		queryGetAllJobs['search'] = search as string;
	}

	const allJobs = await getJobs(queryGetAllJobs);
	const authToken = getCookie(cookiesNames.AUTH_COOKIE, { res, req });

	if (!authToken) {
		return {
			props: {
				fallback: {
					[unstable_serialize({ key: SWR_KEYS.GetAllJobs, query: queryGetAllJobs })]: allJobs,
				},
			},
		};
	}

	return {
		props: {
			fallback: {
				[unstable_serialize({ key: SWR_KEYS.GetAllJobs, query: queryGetAllJobs })]: allJobs,
			},
		},
	};
};
