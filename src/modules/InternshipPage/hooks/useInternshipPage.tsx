import { getJobById } from '@/api';
import { SWR_KEYS } from '@/constants';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';
import { IValueForm } from '../types';

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

	const handleOnCloseModal = () => {
		setIsOpenModal(false);
	};

	const handleOnSubmitForm = (values: IValueForm) => {
		console.log(values);
	};

	return {
		detailedJob,
		error,
		isOpenModal,
		setIsOpenModal,
		handleOnClickButton,
		handleOnCloseModal,
		handleOnSubmitForm,
	};
};
