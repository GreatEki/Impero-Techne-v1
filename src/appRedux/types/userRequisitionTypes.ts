export const ADD_PROJECT_INFO = 'ADD_PROJECT_INFO';
export const ADD_PRODUCTSTORAGE_ITEM = 'ADD_PRODUCTSTORAGE_ITEM';
export const REMOVE_PRODUCTSTORAGE_ITEM = 'REMOVE_PRODUCTSTORAGE_ITEM';

export interface userReq_ProjectInfoI {
	request_title: string;
	project_name: string;
	client_name: string;
	request_type: string;
}

export interface AddProjectInfoDispatch {
	type: typeof ADD_PROJECT_INFO;
	payload: userReq_ProjectInfoI;
}

export interface ProductStorageItemI {
	itemId: string;
	description: string;
	quantity: number;
	unit: string;
	unit_cost: number;
	estimated_cost: number;
}

export interface AddProductStorageItemDispatch {
	type: typeof ADD_PRODUCTSTORAGE_ITEM;
	payload: ProductStorageItemI[];
}

export interface RemoveProductStorageItemDispatch {
	type: typeof REMOVE_PRODUCTSTORAGE_ITEM;
	payload: ProductStorageItemI[];
}

export type userRequisitionDispatchTypes =
	| AddProjectInfoDispatch
	| AddProductStorageItemDispatch
	| RemoveProductStorageItemDispatch;
