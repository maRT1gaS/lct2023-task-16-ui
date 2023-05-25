import { getJobById } from '@/api';
import { SWR_KEYS } from '@/constants';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

export const useInternshipPage = () => {
	const {
		query: { id },
	} = useRouter();
	const { data: detailedJob, error } = useSWR({ key: SWR_KEYS.GetJobById, query: id }, ({ query }) =>
		getJobById(query as string)
	);

	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleOnClickButton = () => {
		setIsOpenModal(true);
	};

	return {
		detailedJob,
		error,
		isOpenModal,
		setIsOpenModal,
		handleOnClickButton,
	};
};
