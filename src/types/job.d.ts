// Jobs
export interface IJobList {
	id: number;
	nameJob: string;
	nameOrg: string;
	startOfSelection: Date;
	endOfSelection: Date;
	imagePreviewImg: string;
}

export type ListJobsType = IJobList[];

export interface IListJobsData {
	jobs: ListJobsType;
	length: number;
}

// Job
export interface IDetailedJob {
	imagePreviewImg: string;
	tag: number;
	rating: number;
	nameOrg: string;
	nameJob: string;
	adress: string;
	startOfSelection: Date;
	endOfSelection: Date;
	startOfTheInternship: Date;
	endOfInternship: Date;
	coordinates: CoordinatesRes;
	responsibilities: string[];
	requirements: string[];
	conditions: string[];
}

interface CoordinatesRes {
	latitude: number;
	longitude: number;
}
