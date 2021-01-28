export const LOGIN_USER = 'LOGIN_USER';
export const LOADING = 'LOADING';
export const LOADING_FAIL = 'LOADING_FAIL';
export const CLEAR_ERRORS = 'CLEAR_ERROR';

export type ROLES = 'Admin' | 'Staff';

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

export interface USERI {
	token: string;
	expiration: string | Date;
	username: string;
	userRoles: ROLES[];
	phoneNumber: string;
	firstName: string;
	lastName: string;
	otherName: string | null;
	dateOfBirth: string | Date;
	emailAddress: string;
	emailConfirmed: boolean;
	addessLine1: string | null;
	addressLine2: string | null;
	country: string;
	city: string;
	state: string;
	profilePicture: string | null;
	rating: null;
	review: null;
}

export interface LoginUserDispatch {
	type: typeof LOGIN_USER;
	payload: USERI;
}

export type UserDispatchTypes =
	| LoginUserDispatch
	| LoadingDispatch
	| LoadingFailDispatch
	| ClearErrorsDispatch;
