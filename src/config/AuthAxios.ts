import axios from 'axios';
import { baseUrl } from 'appRedux/BaseUrl';

let accessToken = localStorage.getItem('token');
accessToken = accessToken ? JSON.parse(accessToken) : null;

const AuthAxios = axios.create({
	baseURL: baseUrl,
	headers: {
		Authorization: accessToken,
	},
});

export default AuthAxios;
