import { getJobById } from '@/api';
import { SWR_KEYS } from '@/constants';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export const useInternshipPage = () => {
	const {
		query: { id },
	} = useRouter();
	const { data: detailedJob, error } = useSWR({ key: SWR_KEYS.GetJobById, query: id }, ({ query }) =>
		getJobById(query as string)
	);

	return {
		detailedJob,
		error,
	};
};
