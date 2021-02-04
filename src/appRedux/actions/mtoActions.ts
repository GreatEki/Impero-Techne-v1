import { Dispatch } from 'redux';
import {
	ADD_PROJECT_INFO,
	MtoDispatchTypes,
	ProjectInfoI,
	MtoStorageItemI,
	ADD_MTOSTORAGE_ITEM,
	REMOVE_MTOSTORAGE_ITEM,
	MTOI,
	ADD_MTO,
} from '../types/mtoTypes';

export const addProjectInfo = (
	projectInfo: ProjectInfoI,
	dispatch: Dispatch
) => {
	return () => {
		dispatch({
			type: ADD_PROJECT_INFO,
			payload: projectInfo,
		});
	};
};

export const addMtoStorageItem = (storageItem: MtoStorageItemI) => (
	dispatch: Dispatch<MtoDispatchTypes>
) => {
	dispatch({
		type: ADD_MTOSTORAGE_ITEM,
		payload: storageItem,
	});
};

export const removeMtoStorageItem = (id: string) => (
	dispatch: Dispatch<MtoDispatchTypes>
) => {
	dispatch({
		type: REMOVE_MTOSTORAGE_ITEM,
		payload: id,
	});
};

export const addMto = (mto: MTOI) => (dispatch: Dispatch<MtoDispatchTypes>) => {
	dispatch({
		type: ADD_MTO,
		payload: mto,
	});
};
