import Axios from 'axios';
import { env } from '../config/env';

export const http = Axios.create({
	baseURL: env.API_BASE_URL
});
