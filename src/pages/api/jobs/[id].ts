import { NextApiRequest, NextApiResponse } from 'next';
import jobListJSON from '@/mock/jobs-list.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const { id: queryId } = req.query;

		const data = jobListJSON.find(({ id }) => id === Number(queryId));
		res.status(200).json(data);
	}
}
