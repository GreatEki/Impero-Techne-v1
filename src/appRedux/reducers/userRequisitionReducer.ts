import * as userReqT from '../types/userRequisitionTypes';

interface StateI {
	userReq_ProjectInfo: userReqT.userReq_ProjectInfoI;
	productStorageItems: userReqT.ProductStorageItemI[];
	serviceDetail: userReqT.ServiceDetailsI;
	requisitions: userReqT.RequisitionsI[];
	otherDetails: userReqT.OtherDetailsI;
}

const INITIAL_STATE: StateI = {
	userReq_ProjectInfo: {
		project_id: '',
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
	otherDetails: {
		detailed_spec: '',
		ref_code: '',
		terms_and_cond: '',
		sellers_country: '',
		sellers_state: '',
		sellers_city: '',
		delivery_address: '',
		date_req_onsite: '',
		other_info: '',
		del_special_instruction: '',
		other_special_instructions: '',
		spares_required: false,
		after_sales: false,
	},
	requisitions: [],
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
				productStorageItems: state.productStorageItems.filter(
					(item) => item.itemId !== action.payload
				),
			};

		case userReqT.ADD_PRODUCTSTORAGE_ITEM:
			return {
				...state,
				productStorageItems: [action.payload, ...state.productStorageItems],
			};

		case userReqT.ADD_SERVICEDETAIL:
			return {
				...state,
				serviceDetail: action.payload,
			};

		case userReqT.CREATE_REQUISITION:
			return {
				...state,
				requisitions: [action.payload, ...state.requisitions],
			};

		default:
			return state;
	}
};

export default userRequisitionReducer;
