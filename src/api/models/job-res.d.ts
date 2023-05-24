// GetJobs
export interface IJobRes {
	id: number;
	nameJob: string;
	nameOrg: string;
	startOfSelection: Date;
	endOfSelection: Date;
	imgSrc: string;
}

export type JobsResType = IJobRes[];

export interface IJobsRes {
	length: number;
	jobs: JobsResType;
}

// GetJobById

export interface IGetJobByIdJobRes {
	imgSrc: string;
	rating: number;
	nameJob: string;
	nameOrg: string;
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
