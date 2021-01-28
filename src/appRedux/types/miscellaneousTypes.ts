export const LOADING = 'LOADING';
export const LOADING_FAIL = 'LOADING_FAIL';
export const CLEAR_ERRORS = 'CLEAR_ERROR';
export const GET_ALL_COUNTRY = 'GET_ALL_COUNTRY';

export interface LoadingDispatch {
	type: typeof LOADING;
}

export interface LoadingFailDispatch {
	type: typeof LOADING_FAIL;
	payload: string;
}

export interface ClearErrorsDispatch {
	type: typeof CLEAR_ERRORS;
}

export interface CountryI {
	countryId: number;
	countryName: string;
}

export interface GetAllCountriesDispatch {
	type: typeof GET_ALL_COUNTRY;
	payload: CountryI[];
}

export type MiscellaneousDispatchTypes =
	| GetAllCountriesDispatch
	| LoadingDispatch
	| LoadingFailDispatch
	| ClearErrorsDispatch;
