import type { StatsPlatformType } from '@/types';
import { apiInstance } from '../instance';
import type { StatsPlatformRes } from '../models';
import { mappedGetStatsPlatform } from '../adapters';

export const getStatsPlatform = async (): Promise<StatsPlatformType> => {
	const resData = (await apiInstance.get<StatsPlatformRes>('/stats-platform')).data;

	return mappedGetStatsPlatform(resData);
};
