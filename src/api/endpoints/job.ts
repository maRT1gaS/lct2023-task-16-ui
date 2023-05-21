import type { IJobsData } from '@/types';
import { apiInstance } from '../instance';
import type { IJobsRes } from '../models';
import { mappedGetJobs } from '../adapters';

interface IQueryParam {
	limit?: number;
}

export const getJobs = async (queryParams: IQueryParam = {}): Promise<IJobsData> => {
	const resData = (
		await apiInstance.get<IJobsRes>('/jobs-list', {
			params: queryParams,
		})
	).data;

	return mappedGetJobs(resData);
};
