import type { IJobsData } from '@/types';
import type { IJobsRes } from '../models';

export const mappedGetJobs = (jobs: IJobsRes): IJobsData => jobs;
