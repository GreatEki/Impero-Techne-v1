export const LOADING = 'LOADING';
export const LOADING_FAIL = 'LOADING_FAIL';
export const CLEAR_ERRORS = 'CLEAR_ERROR';
export const GET_ALL_COUNTRY = 'GET_ALL_COUNTRY';
export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';
export const GET_ALL_COMPANIES = 'GET_ALL_COMPANIES';

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

export interface ProjectsI {
	projectId: number;
	projectName: string;
	description: string;
	createdDate: Date | string;
}

export interface GetAllProjectsDispatch {
	type: typeof GET_ALL_PROJECTS;
	payload: ProjectsI[];
}

export interface CompaniesI {
	companyId: number;
	companyName: string;
}

export interface GetAllCompaniesDispatch {
	type: typeof GET_ALL_COMPANIES;
	payload: CompaniesI[];
}

export type MiscellaneousDispatchTypes =
	| GetAllCountriesDispatch
	| LoadingDispatch
	| LoadingFailDispatch
	| ClearErrorsDispatch
	| GetAllProjectsDispatch
	| GetAllCompaniesDispatch;
