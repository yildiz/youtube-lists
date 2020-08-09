import Axios from 'axios';
import Router from 'next/router';
import NProgress from 'nprogress';

const BASE_URLS = {
	development: 'http://localhost:3000/api/',
	production: 'https://youtube-lists.vercel.app/api/',
};

const api = Axios.create({
	baseURL: BASE_URLS[process.env.NODE_ENV],
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

api.interceptors.response.use(
	(response) => response,
	function (error) {
		if (401 === error.response.status) {
			Router.push('/login');
		} else {
			return Promise.reject(error);
		}
	},
);

export const addBearerToken = (token) => {
	api.defaults.headers.Authorization = `Bearer ${token}`;
};
export const removeBearerToken = () => {
	delete api.defaults.headers.Authorization;
};

export const NPS = NProgress;

export default api;
