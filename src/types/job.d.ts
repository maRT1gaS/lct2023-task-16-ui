export interface IJob {
	id: number;
	nameJob: string;
	shortNameOrg: string;
	dateStart: Date;
	dateEnd: Date;
	img: string;
}

export type JobsType = IJob[];

export interface IJobsData {
	jobs: JobsType;
	length: number;
}
