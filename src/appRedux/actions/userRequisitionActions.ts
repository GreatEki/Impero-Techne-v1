import { Dispatch } from 'redux';
import {
	userRequisitionDispatchTypes,
	userReq_ProjectInfoI,
	ADD_PROJECT_INFO,
	ADD_PRODUCTSTORAGE_ITEM,
	REMOVE_PRODUCTSTORAGE_ITEM,
	ProductStorageItemI,
	RemoveProductStorageItemDispatch,
	AddProductStorageItemDispatch,
	ADD_SERVICEDETAIL,
	ServiceDetailsI,
} from '../types/userRequisitionTypes';

export const addUserReqProjectInfo = (projectInfo: userReq_ProjectInfoI) => (
	dispatch: Dispatch<userRequisitionDispatchTypes>
) => {
	dispatch({
		type: ADD_PROJECT_INFO,
		payload: projectInfo,
	});
};

export const addItemToProductStorageItems = (
	storageItems: ProductStorageItemI
) => (dispatch: Dispatch<AddProductStorageItemDispatch>) => {
	dispatch({
		type: ADD_PRODUCTSTORAGE_ITEM,
		payload: storageItems,
	});
};

export const removeItemfromProductStorageItems = (itemId: string) => (
	dispatch: Dispatch<RemoveProductStorageItemDispatch>
) => {
	dispatch({
		type: REMOVE_PRODUCTSTORAGE_ITEM,
		payload: itemId,
	});
};

export const addServiceDetail = (serviceDetail: ServiceDetailsI) => (
	dispatch: Dispatch<userRequisitionDispatchTypes>
) => {
	dispatch({
		type: ADD_SERVICEDETAIL,
		payload: serviceDetail,
	});
};
