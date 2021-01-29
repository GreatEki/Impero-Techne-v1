import { Dispatch } from 'redux';
import {
	GET_ALL_COMPANIES,
	GET_ALL_COUNTRY,
	GET_ALL_PROJECTS,
	GET_ALL_STATES,
	MiscellaneousDispatchTypes,
} from '../types/miscellaneousTypes';
import AuthAxios from 'config/AuthAxios';
import { LOADING_FAIL } from 'appRedux/types/miscellaneousTypes';

export const getAllCountry = () => async (
	dispatch: Dispatch<MiscellaneousDispatchTypes>
) => {
	try {
		const { data } = await AuthAxios.get('/api/v1/miscellaneous/GetAllCountry');

		dispatch({
			type: GET_ALL_COUNTRY,
			payload: data.data,
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

export const getAllProjects = () => async (
	dispatch: Dispatch<MiscellaneousDispatchTypes>
) => {
	try {
		const { data } = await AuthAxios.get('/api/v1/projects');

		dispatch({
			type: GET_ALL_PROJECTS,
			payload: data.data,
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

export const getAllCompanies = () => async (
	dispatch: Dispatch<MiscellaneousDispatchTypes>
) => {
	try {
		const { data } = await AuthAxios.get(
			'/api/v1/miscellaneous/GetAllCompanyQueries'
		);

		dispatch({
			type: GET_ALL_COMPANIES,
			payload: data.data,
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

export const getAllStates = () => async (
	dispatch: Dispatch<MiscellaneousDispatchTypes>
) => {
	try {
		const { data } = await AuthAxios.get('/api/v1/miscellaneous/GetAllState');

		dispatch({
			type: GET_ALL_STATES,
			payload: data.data,
		});
	} catch (err) {
		dispatch({
			type: LOADING_FAIL,
			payload: err.response ? err.response.data.message : err.message,
		});
	}
};
