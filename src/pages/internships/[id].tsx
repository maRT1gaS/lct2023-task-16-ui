import { getJobById } from '@/api';
import { SWR_KEYS } from '@/constants';
import { InternshipPage as InternshipPageCmp } from '@/modules';
import type { GetServerSideProps } from 'next';
import { unstable_serialize } from 'swr';

const InternshipPage = () => {
	return <InternshipPageCmp />;
};

export default InternshipPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const internshipId = query?.id as string;

	const detailedJob = await getJobById(internshipId);

	return {
		props: {
			fallback: {
				[unstable_serialize({ key: SWR_KEYS.GetJobById, query: internshipId })]: detailedJob,
			},
		},
	};
};
