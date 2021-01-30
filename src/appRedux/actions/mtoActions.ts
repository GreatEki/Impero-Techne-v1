import { Dispatch } from 'redux';
import {
	ADD_PROJECT_INFO,
	MtoDispatchTypes,
	ProjectInfoI,
	MtoStorageItemI,
	ADD_MTOSTORAGE_ITEM,
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

export const addMtoStorageItem = (storageItem: MtoStorageItemI[]) => (
	dispatch: Dispatch<MtoDispatchTypes>
) => {
	dispatch({
		type: ADD_MTOSTORAGE_ITEM,
		payload: storageItem,
	});
};
