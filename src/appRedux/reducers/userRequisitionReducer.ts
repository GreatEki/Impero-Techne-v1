import * as userReqT from '../types/userRequisitionTypes';

interface StateI {
	userReq_ProjectInfo: userReqT.userReq_ProjectInfoI;
	productStorageItems: userReqT.ProductStorageItemI[];
}

const INITIAL_STATE: StateI = {
	userReq_ProjectInfo: {
		request_title: '',
		project_name: '',
		client_name: '',
		request_type: '',
	},
	productStorageItems: [],
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

		default:
			return state;
	}
};

export default userRequisitionReducer;
