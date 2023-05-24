import type { IDetailedJob, IListJobsData } from '@/types';
import type { IJobsRes, IGetJobByIdJobRes } from '../models';

export const mappedGetJobs = (jobs: IJobsRes): IListJobsData => jobs;

export const mappedGetJobById = (job: IGetJobByIdJobRes): IDetailedJob => job;
