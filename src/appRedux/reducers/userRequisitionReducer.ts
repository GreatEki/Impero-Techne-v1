import * as userReqT from '../types/userRequisitionTypes';

interface StateI {
	userReq_ProjectInfo: userReqT.userReq_ProjectInfoI;
}

const INITIAL_STATE: StateI = {
	userReq_ProjectInfo: {
		request_title: '',
		project_name: '',
		client_name: '',
		request_type: '',
	},
};

const userRequisitionReducer = (
	state: StateI = INITIAL_STATE,
	action: any
): StateI => {
	switch (action.type) {
		case userReqT.ADD_PROJECT_INFO:
			return {
				userReq_ProjectInfo: action.payload,
			};
		default:
			return state;
	}
};

export default userRequisitionReducer;
