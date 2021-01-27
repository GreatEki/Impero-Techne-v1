export const LOGIN_USER = 'LOGIN_USER';
export const LOADING = 'LOADING';
export const LOADING_FAIL = 'LOADING_FAIL';

export type ROLES = 'Admin' | 'Staff';

export type LoadingDispatch = {
	type: typeof LOADING;
};

export type LoadingFailDispatch = {
	type: typeof LOADING_FAIL;
	payload: string;
};

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

export type LoginUserDispatch = {
	type: typeof LOGIN_USER;
	payload: USERI;
};

export type UserDispatchTypes =
	| LoginUserDispatch
	| LoadingDispatch
	| LoadingFailDispatch;
