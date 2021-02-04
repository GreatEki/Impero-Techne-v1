import * as MtoT from 'appRedux/types/mtoTypes';

interface StateI {
	projectInfo: MtoT.ProjectInfoI;
	mtoStorageItems: MtoT.MtoStorageItemI[];
	MtoList: MtoT.MTOI[];
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
	MtoList: [],
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
				mtoStorageItems: [action.payload, ...state.mtoStorageItems],
			};

		case MtoT.REMOVE_MTOSTORAGE_ITEM:
			return {
				...state,
				mtoStorageItems: state.mtoStorageItems.filter(
					(item) => item.itemId !== action.payload
				),
			};

		default:
			return state;
	}
};

export default mtoReducer;
