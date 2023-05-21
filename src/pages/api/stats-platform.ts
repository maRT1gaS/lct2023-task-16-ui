import { NextApiRequest, NextApiResponse } from 'next';
import statsJSON from '@/mock/stats-platform.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		res.status(200).json(statsJSON);
	}
}
