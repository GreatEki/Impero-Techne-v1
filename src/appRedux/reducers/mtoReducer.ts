import {
	ADD_PROJECT_INFO,
	ProjectInfoI,
	MtoDispatchTypes,
} from 'appRedux/types/mtoTypes';

interface StateI {
	projectInfo: ProjectInfoI;
}

const INITIAL_STATE: StateI = {
	projectInfo: {
		project_name: '',
		client_name: '',
		company_name: '',
		discipline: '',
		discipline_subType: '',
		request_formName: '',
	},
};

const mtoReducer = (
	state = INITIAL_STATE,
	action: MtoDispatchTypes
): StateI => {
	switch (action.type) {
		case ADD_PROJECT_INFO:
			return {
				projectInfo: action.payload,
			};

		default:
			return state;
	}
};

export default mtoReducer;
