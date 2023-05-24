interface IQueryParamsForGetAllJobsInternshipsPage {
	tags?: string[];
	search?: string;
}

export const mappedGetJobsQueryParamsInternshipsPage = (query: { [key: string]: unknown }) => {
	const queryForGetAllJobs: IQueryParamsForGetAllJobsInternshipsPage = {};

	if (query?.tags) {
		const queryTags = query.tags;
		queryForGetAllJobs['tags'] = Array.isArray(queryTags) ? queryTags : [queryTags];
	}

	if (query?.search) {
		queryForGetAllJobs['search'] = query?.search as string;
	}

	return queryForGetAllJobs;
};
