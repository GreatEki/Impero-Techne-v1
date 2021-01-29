import * as adminMT from '../types/adminModuleTypes';

interface StateI {
	clients: adminMT.ClientsI[];
}

const INITIAL_STATE = {
	clients: [],
};

const adminModuleReducer = (
	state = INITIAL_STATE,
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
