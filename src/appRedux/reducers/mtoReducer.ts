import { addMtoStorageItem } from 'appRedux/actions/mtoActions';
import * as MtoT from 'appRedux/types/mtoTypes';

interface StateI {
	projectInfo: MtoT.ProjectInfoI;
	mtoStorageItems: MtoT.MtoStorageItemI[];
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

	mtoStorageItems: [],
};

const mtoReducer = (
	state = INITIAL_STATE,
	action: MtoT.MtoDispatchTypes
): StateI => {
	switch (action.type) {
		case MtoT.ADD_PROJECT_INFO:
			return {
				...state,
				projectInfo: action.payload,
			};

		case MtoT.ADD_MTOSTORAGE_ITEM:
			return {
				...state,
				mtoStorageItems: action.payload,
			};

		default:
			return state;
	}
};

export default mtoReducer;
