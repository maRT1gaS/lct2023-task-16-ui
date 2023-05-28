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

const defaultValueGetJob = {
	imagePreviewImg: '',
	tags: null,
	rating: 0,
	nameOrg: '',
	nameJob: '',
	adress: '',
	startOfSelection: null,
	endOfSelection: null,
	startOfTheInternship: null,
	endOfInternship: null,
	coordinates: null,
	responsibilities: [],
	requirements: [],
	conditions: [],
};

export const mappedGetJobById = ({
	id,
	imagePreviewImg,
	tag,
	rating,
	nameJob,
	nameOrg,
	adress,
	startOfSelection,
	endOfSelection,
	startOfTheInternship,
	endOfInternship,
	coordinates,
	responsibilities,
	requirements,
	conditions,
}: IGetJobByIdJobRes): IDetailedJob => ({
	...defaultValueGetJob,
	id,
	imagePreviewImg,
	tag,
	rating,
	nameJob,
	nameOrg,
	adress,
	startOfSelection,
	endOfSelection,
	startOfTheInternship,
	endOfInternship,
	coordinates,
	responsibilities,
	requirements,
	conditions,
});
