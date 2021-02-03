import { Dispatch } from 'redux';
import axios from 'axios';
import { baseUrl } from '../BaseUrl';
import AuthAxios from 'config/AuthAxios';

import {
	UserDispatchTypes,
	LOGIN_USER,
	LOADING,
	LOADING_FAIL,
	CLEAR_ERRORS,
	RegUserI,
	LOADING_SUCCESS,
} from '../types/userTypes';

export const signIn = (
	user: { email: string; password: string },
	props: any
) => async (dispatch: Dispatch<UserDispatchTypes>) => {
	try {
		dispatch({
			type: CLEAR_ERRORS,
		});

		dispatch({
			type: LOADING,
		});

		const { data } = await axios.post(`${baseUrl}/api/v1/users/login`, user);

		dispatch({
			type: LOGIN_USER,
			payload: data,
		});

		const token = `Bearer ${data.token}`;

		localStorage.setItem('token', JSON.stringify(token));
		localStorage.setItem('theUser', JSON.stringify(data));

		props.history.push('/app');
	} catch (err) {
		return dispatch({
			type: LOADING_FAIL,
			payload: err.response ? err.response.data.loginError : err.message,
		});
	}
};

export const logOut = (props: any) => {
	// remove token from storage
	localStorage.removeItem('token');
	// remove user from storage
	localStorage.removeItem('theUser');

	props.history.push('/');
};

export const registerUser = (user: RegUserI) => async (
	dispatch: Dispatch<UserDispatchTypes>
) => {
	try {
		dispatch({
			type: CLEAR_ERRORS,
		});

		dispatch({
			type: LOADING,
		});
		const { data } = await AuthAxios.post(`/api/v1/users/register`, user);

		// console.log(data);
		dispatch({
			type: LOADING_SUCCESS,
			payload: data.message,
		});
	} catch (err) {
		if (err.response) {
			console.log(err.response);
		}
		dispatch({
			type: LOADING_FAIL,
			payload: err.response ? err.response.data.message : err.message,
		});
	}
};
