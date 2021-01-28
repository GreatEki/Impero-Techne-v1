import { Dispatch } from 'redux';
import {
	GET_ALL_COUNTRY,
	MiscellaneousDispatchTypes,
} from '../types/miscellaneousTypes';
import AuthAxios from 'config/AuthAxios';
import { LOADING_FAIL } from 'appRedux/types/miscellaneousTypes';

export const getAllCountry = () => async (
	dispatch: Dispatch<MiscellaneousDispatchTypes>
) => {
	try {
		const res = await AuthAxios.get('/api/v1/miscellaneous/GetAllCountry');

		console.log(res.data);
		dispatch({
			type: GET_ALL_COUNTRY,
			payload: res.data,
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
