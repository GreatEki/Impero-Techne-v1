import * as MtoT from 'appRedux/types/mtoTypes';

interface StateI {
	projectInfo: MtoT.ProjectInfoI;
	mtoStorageItems: MtoT.MtoStorageItemI[];
	mtoList: MtoT.MTOI[];
}

const INITIAL_STATE: StateI = {
	projectInfo: {
		project_id: '',
		project_name: '',
		client_name: '',
		company_name: '',
		discipline: '',
		discipline_subType: '',
		request_formName: '',
		status: 'Opened',
	},

	mtoStorageItems: [],
	mtoList: [],
};

const mtoReducer = (
	state: StateI = INITIAL_STATE,
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

		case MtoT.ADD_MTO:
			return {
				...state,
				mtoList: [action.payload, ...state.mtoList],
			};

		default:
			return state;
	}
};

export default mtoReducer;
