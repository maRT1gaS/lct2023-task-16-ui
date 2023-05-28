// Jobs
export interface IJobList {
	id: number;
	nameJob: string;
	nameOrg: string;
	startOfSelection: Date | null;
	endOfSelection: Date | null;
	imagePreviewImg: string | null;
}

export type ListJobsType = IJobList[];

export interface IListJobsData {
	jobs: ListJobsType;
	length: number;
}

// Job
export interface IDetailedJob {
	id: number;
	imagePreviewImg: string;
	tag: number | null;
	rating: number;
	nameOrg: string;
	nameJob: string;
	adress: string;
	startOfSelection: Date | null;
	endOfSelection: Date | null;
	startOfTheInternship: Date | null;
	endOfInternship: Date | null;
	coordinates: CoordinatesRes | null;
	responsibilities: string[];
	requirements: string[];
	conditions: string[];
}

interface CoordinatesRes {
	latitude: number | null;
	longitude: number | null;
}
