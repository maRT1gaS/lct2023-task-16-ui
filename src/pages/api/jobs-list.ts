import { NextApiRequest, NextApiResponse } from 'next';
import jobListJSON from '@/mock/jobs-list.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const { limit = null } = req.query;
		const lengthJobsList = jobListJSON.length;

		if (limit !== null) {
			res.status(200).json({
				jobs: jobListJSON.slice(-limit),
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
