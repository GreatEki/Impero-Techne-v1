export const ADD_PROJECT_INFO = 'ADD_PROJECT_INFO';
export const ADD_PRODUCTSTORAGE_ITEM = 'ADD_PRODUCTSTORAGE_ITEM';
export const REMOVE_PRODUCTSTORAGE_ITEM = 'REMOVE_PRODUCTSTORAGE_ITEM';
export const ADD_SERVICEDETAIL = 'ADD_SERVICEDETAIL';
export const CREATE_REQUISITION = 'CREATE_REQUISITION';

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

export interface OtherDetailsI {
	detailed_spec: string;
	ref_code: string;
	terms_and_cond: string;
	sellers_country: string;
	sellers_state: string;
	sellers_city: string;
	delivery_address: string;
	date_req_onsite: string;
	other_info: string;
	del_special_instruction: string;
	other_special_instructions: string;
	spares_required: boolean;
	after_sales: boolean;
}

export type StatusI = 'Opened' | 'Approved' | 'Queried' | 'Rejected';
export interface RequisitionsI {
	project_info: userReq_ProjectInfoI;
	products: ProductStorageItemI[] | null;
	service: ServiceDetailsI | null;
	otherDetails: OtherDetailsI;
	status: StatusI;
}

export interface CreateRequisitionDispatch {
	type: typeof CREATE_REQUISITION;
	payload: RequisitionsI;
}

export type userRequisitionDispatchTypes =
	| AddProjectInfoDispatch
	| AddProductStorageItemDispatch
	| RemoveProductStorageItemDispatch
	| AddServiceDetailDispatch
	| CreateRequisitionDispatch;
