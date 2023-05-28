import type { IDetailedJob, IListJobsData } from '@/types';
import { apiInstance } from '../instance';
import type { GetJobsResType, IGetJobByIdJobRes } from '../models';
import { mappedGetJobs } from '../adapters';
import qs from 'qs';
import { mappedGetJobById } from '../adapters/vacancies';

interface IGetJobsQueryParam {
	limit?: number;
	tags?: string[];
	search?: string;
}

export const getJobs = async (queryParams: IGetJobsQueryParam = {}): Promise<IListJobsData> => {
	const query = qs.stringify(queryParams, { addQueryPrefix: true, arrayFormat: 'repeat' });
	const resData = (await apiInstance.get<GetJobsResType>(`/vacancies/${query}`)).data;

	return mappedGetJobs(resData);
};

export const getJobById = async (id: string): Promise<IDetailedJob> => {
	const resData = (await apiInstance.get<IGetJobByIdJobRes>(`/vacancies/${id}`)).data;

	return mappedGetJobById(resData);
};
