export interface IJobRes {
	id: number;
	nameJob: string;
	shortNameOrg: string;
	dateStart: Date;
	dateEnd: Date;
	img: string;
}

export type JobsResType = IJobRes[];

export interface IJobsRes {
	length: number;
	jobs: JobsResType;
}
