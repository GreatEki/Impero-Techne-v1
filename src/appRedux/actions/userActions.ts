import { Dispatch } from 'redux';
import axios from 'axios';
import { baseUrl, config } from '../BaseUrl';

import {
	UserDispatchTypes,
	LOGIN_USER,
	LOADING,
	LOADING_FAIL,
} from '../types/userTypes';

export const signIn = (user: { email: string; password: string }) => async (
	dispatch: Dispatch<UserDispatchTypes>
) => {
	try {
		dispatch({
			type: LOADING,
		});

		const { data } = await axios.post(`${baseUrl}/api/v1/users/login`, user);

		dispatch({
			type: LOGIN_USER,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOADING_FAIL,
			payload: err.response ? err.response.data.loginError : err.message,
		});
	}
};
