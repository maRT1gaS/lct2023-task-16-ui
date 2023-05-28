// GetJobs
interface IJobGetJobsRes {
	id: number;
	nameJob: string;
	nameOrg: string;
	rating: string;
	adress: string;
	coordinated: ICoordinatesRes;
	tags: number;
	startOfSelection: Date;
	endOfSelection: Date;
	startOfTheInternship: Date;
	endOfInternship: Date;
}

export type GetJobsResType = IJobGetJobsRes[];

// GetJobById

export interface IGetJobByIdJobRes {
	id: number;
	imagePreviewImg: string;
	rating: number;
	tag: number;
	nameJob: string;
	nameOrg: string;
	adress: string;
	startOfSelection: Date;
	endOfSelection: Date;
	startOfTheInternship: Date;
	endOfInternship: Date;
	coordinates: ICoordinatesRes;
	responsibilities: string[];
	requirements: string[];
	conditions: string[];
}

interface ICoordinatesRes {
	latitude: number;
	longitude: number;
}
