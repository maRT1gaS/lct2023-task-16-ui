import { API_URL } from '@/constants';
import axios from 'axios';

export const apiInstance = axios.create({
	baseURL: API_URL,
});
