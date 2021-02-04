export const ADD_PROJECT_INFO = 'ADD_PROJECT_INFO';
export const ADD_PRODUCTSTORAGE_ITEM = 'ADD_PRODUCTSTORAGE_ITEM';
export const REMOVE_PRODUCTSTORAGE_ITEM = 'REMOVE_PRODUCTSTORAGE_ITEM';
export const ADD_SERVICEDETAIL = 'ADD_SERVICEDETAIL';

export interface userReq_ProjectInfoI {
	project_id: string | number;
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
	payload: ProductStorageItemI;
}

export interface RemoveProductStorageItemDispatch {
	type: typeof REMOVE_PRODUCTSTORAGE_ITEM;
	payload: string;
}

export interface ServiceDetailsI {
	intro_and_desc: string;
	scope_of_works: string;
	reference_code_and_stds: string;
	detailed_desc_of_work_and_specs: string;
	technical_eval_req: string;
	reference_drawings: string;
	work_schedule: string;
	commercial: string;
	terms_and_conditions: string;
	payment_terms: string;
	renumeration: string;
	validity_period: string;
	delivery_address: string;
	special_instructions: string;
	date_required_on_site: string | Date;
}

export interface AddServiceDetailDispatch {
	type: typeof ADD_SERVICEDETAIL;
	payload: ServiceDetailsI;
}

export type userRequisitionDispatchTypes =
	| AddProjectInfoDispatch
	| AddProductStorageItemDispatch
	| RemoveProductStorageItemDispatch
	| AddServiceDetailDispatch;
