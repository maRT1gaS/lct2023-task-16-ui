import { LOCAL_API_URL, API_URL } from '@/constants';
import axios from 'axios';

export const localApiInstance = axios.create({
	baseURL: LOCAL_API_URL,
});

export const apiInstance = axios.create({
	baseURL: API_URL,
});
