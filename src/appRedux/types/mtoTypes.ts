export const ADD_PROJECT_INFO = 'ADD_PROJECT_INFO';
export const ADD_MTOSTORAGE_ITEM = 'ADD_MTOSTORAGE_ITEM';
export const REMOVE_MTOSTORAGE_ITEM = 'REMOVE_MTOSTORAGE_ITEM';
export const ADD_MTO = 'ADD_MTO';

export interface ProjectInfoI {
	project_name: string;
	client_name: string;
	company_name: string;
	discipline: string;
	discipline_subType: string;
	request_formName: string;
}

export interface AddProjectInfoDispatch {
	type: typeof ADD_PROJECT_INFO;
	payload: ProjectInfoI;
}

export interface MtoStorageItemI {
	itemId: string;
	description: string;
	voltage: string | number;
	unit: string | number;
	qty_required: number;
	qty_required_to_buy: number;
	sellers_country: string | number;
	sellers_state: string | number;
	unit_price: number;
	total_price: number;
	sellers_city: string | number;
	delivery_address: string | number;
}

export interface AddMtoStorageItemDispatch {
	type: typeof ADD_MTOSTORAGE_ITEM;
	payload: MtoStorageItemI;
}

export interface RemoveMtoStorageItemDispatch {
	type: typeof REMOVE_MTOSTORAGE_ITEM;
	payload: string;
}

export interface MTOI {
	projectInfo: ProjectInfoI;
	addedItems: MtoStorageItemI[];
}

export interface AddMtoDispatch {
	type: typeof ADD_MTO;
	payload: MTOI;
}

export type MtoDispatchTypes =
	| AddProjectInfoDispatch
	| AddMtoStorageItemDispatch
	| RemoveMtoStorageItemDispatch
	| AddMtoDispatch;
