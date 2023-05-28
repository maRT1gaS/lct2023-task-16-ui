import type { IDetailedJob, IListJobsData } from '@/types';
import type { GetJobsResType, IGetJobByIdJobRes } from '../models';

const defaultValueGetJobs = {
	nameJob: '',
	nameOrg: '',
	startOfSelection: null,
	endOfSelection: null,
	imagePreviewImg: null,
};

export const mappedGetJobs = (jobs: GetJobsResType): IListJobsData => {
	const mappedJobs = jobs.map(({ id, nameJob, nameOrg, startOfSelection, endOfSelection }) => ({
		...defaultValueGetJobs,
		id,
		nameJob,
		nameOrg,
		startOfSelection,
		endOfSelection,
	}));

	return {
		length: jobs.length,
		jobs: mappedJobs,
	};
};

export const mappedGetJobById = (job: IGetJobByIdJobRes): IDetailedJob => job;
