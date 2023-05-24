import { getJobs } from '@/api';
import { SWR_KEYS, directionsTags } from '@/constants';
import { BriefcaseIcon, CalendarIcon } from '@/ui';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { ISearchFormState } from '../types';
import qs from 'qs';
import { useIsomorphicEffect } from '@/hooks';
import { mappedGetJobsQueryParamsInternshipsPage } from '@/features';

export const useInternshipsPage = () => {
	const { push, query } = useRouter();

	const { data: jobsRes } = useSWR(
		{ key: SWR_KEYS.GetAllJobs, query: mappedGetJobsQueryParamsInternshipsPage(query) },
		({ query }) => getJobs(query)
	);

	const [currentTags, setCurrentTags] = useState<string[]>([]);
	const [initFormState, setInitFormState] = useState<ISearchFormState>({} as ISearchFormState);

	const isomorphicEffect = useIsomorphicEffect();

	isomorphicEffect(() => {
		const { tags = [] } = query;

		const arrTags = Array.isArray(tags) ? tags : [tags];

		setCurrentTags(arrTags);
	}, []);

	useEffect(() => {
		const { search = '' } = query;

		setInitFormState({ search: search as string });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleOnClickTag = (value: string) => {
		const { tags = [], ...otherQuery } = query;

		const arrTags = Array.isArray(tags) ? tags : [tags];

		let currentTags;

		if (!tags.includes(value)) {
			currentTags = [...arrTags, value];
		} else {
			currentTags = arrTags.filter((tag) => tag !== value);
		}

		otherQuery.tags = currentTags;

		setCurrentTags(currentTags);
		push(`${window.location.pathname}${qs.stringify(otherQuery, { addQueryPrefix: true, arrayFormat: 'repeat' })}`);
	};

	const mappedButtonDirectionTags = directionsTags.map(({ title, id }) => ({
		title,
		id,
		value: String(id),
		onClick: handleOnClickTag,
	}));

	const internshipsMappedJobData =
		jobsRes?.jobs.map(({ id, imgSrc, nameJob, nameOrg, endOfSelection, startOfSelection }) => {
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

	const handleOnSubmitForm = (values: ISearchFormState) => {
		const { search: _, ...otherQuery } = query;

		otherQuery.search = values.search;
		const newQuery = qs.stringify(otherQuery, { addQueryPrefix: true, arrayFormat: 'repeat' });
		push(`${window.location.pathname}${newQuery}`);
	};

	return {
		internshipsMappedJobData,
		mappedButtonDirectionTags,
		currentTags,
		initFormState,
		handleOnSubmitForm,
	};
};
