import { Dispatch } from 'redux';
import AuthAxios from 'config/AuthAxios';
import {
	adminModuleDispatchTypes,
	GET_ALL_CLIENTS,
	LOADING_FAIL,
} from '../types/adminModuleTypes';

export const getAllClients = () => async (
	dispatch: Dispatch<adminModuleDispatchTypes>
) => {
	try {
		const { data } = await AuthAxios.get('/api/v1/AdminModule/GetAllClients');

		dispatch({
			type: GET_ALL_CLIENTS,
			payload: data,
		});

		console.log(data);
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
