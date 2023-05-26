import { NextApiRequest, NextApiResponse } from 'next';
import jobListJSON from '@/mock/jobs-list.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const { limit = null, tags = [] } = req.query;

		const localTags = Array.isArray(tags) ? tags : [tags];

		if (localTags.length > 0) {
			const newList = jobListJSON.filter(({ tag }) => tags.includes(String(tag)));

			res.status(200).json({
				jobs: newList,
				length: newList.length,
			});

			return;
		}

		const lengthJobsList = jobListJSON.length;

		if (limit !== null) {
			const limiitJobs = jobListJSON.slice(Number(-limit));

			res.status(200).json({
				jobs: limiitJobs,
				length: lengthJobsList,
			});

			return;
		}

		res.status(200).json({
			jobs: jobListJSON,
			length: lengthJobsList,
		});
	}
}
