import * as userReqT from '../types/userRequisitionTypes';

interface StateI {
	userReq_ProjectInfo: userReqT.userReq_ProjectInfoI;
	productStorageItems: userReqT.ProductStorageItemI[];
	serviceDetail: userReqT.ServiceDetailsI;
}

const INITIAL_STATE: StateI = {
	userReq_ProjectInfo: {
		request_title: '',
		project_name: '',
		client_name: '',
		request_type: '',
	},
	productStorageItems: [],
	serviceDetail: {
		intro_and_desc: '',
		scope_of_works: '',
		reference_code_and_stds: '',
		detailed_desc_of_work_and_specs: '',
		technical_eval_req: '',
		reference_drawings: '',
		work_schedule: '',
		commercial: '',
		terms_and_conditions: '',
		payment_terms: '',
		renumeration: '',
		validity_period: '',
		delivery_address: '',
		special_instructions: '',
		date_required_on_site: '',
	},
};

const userRequisitionReducer = (
	state: StateI = INITIAL_STATE,
	action: userReqT.userRequisitionDispatchTypes
): StateI => {
	switch (action.type) {
		case userReqT.ADD_PROJECT_INFO:
			return {
				...state,
				userReq_ProjectInfo: action.payload,
			};

		case userReqT.REMOVE_PRODUCTSTORAGE_ITEM:
			return {
				...state,
				productStorageItems: action.payload,
			};

		case userReqT.ADD_PRODUCTSTORAGE_ITEM:
			return {
				...state,
				productStorageItems: action.payload,
			};

		case userReqT.ADD_SERVICEDETAIL:
			return {
				...state,
				serviceDetail: action.payload,
			};

		default:
			return state;
	}
};

export default userRequisitionReducer;
