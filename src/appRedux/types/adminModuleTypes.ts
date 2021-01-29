export const LOADING = 'LOADING';
export const LOADING_FAIL = 'LOADING_FAIL';
export const GET_ALL_CLIENTS = 'GET_ALL_CLIENTS';

export interface LoadingDispatch {
	type: typeof LOADING;
}

export interface LoadingFailDispatch {
	type: typeof LOADING_FAIL;
	payload: string | null;
}

export interface ClientsI {
	clientId: number;
	clientName: string;
	description: string;
	address: string;
	phoneNumber1: string;
	phoneNumber2: string;
	emailAddress: string;
}

export interface GetAllClientsDispatch {
	type: typeof GET_ALL_CLIENTS;
	payload: ClientsI[];
}

export type adminModuleDispatchTypes =
	| LoadingDispatch
	| LoadingFailDispatch
	| GetAllClientsDispatch;
