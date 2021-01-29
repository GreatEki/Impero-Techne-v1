import * as adminMT from '../types/adminModuleTypes';

interface StateI {
	loading: boolean;
	clients: adminMT.ClientsI[];
}

const INITIAL_STATE: StateI = {
	clients: [],
	loading: false,
};

const adminModuleReducer = (
	state: StateI = INITIAL_STATE,
	action: adminMT.adminModuleDispatchTypes
) => {
	switch (action.type) {
		case adminMT.GET_ALL_CLIENTS:
			return {
				...state,
				clients: action.payload,
			};
		default:
			return state;
	}
};

export default adminModuleReducer;
