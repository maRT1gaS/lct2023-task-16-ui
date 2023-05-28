import type { StatsPlatformType } from '@/types';
import { localApiInstance } from '../instance';
import type { StatsPlatformRes } from '../models';
import { mappedGetStatsPlatform } from '../adapters';

export const getStatsPlatform = async (): Promise<StatsPlatformType> => {
	const resData = (await localApiInstance.get<StatsPlatformRes>('/stats-platform')).data;

	return mappedGetStatsPlatform(resData);
};
