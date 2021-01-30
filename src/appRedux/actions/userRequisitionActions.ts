import { Dispatch } from 'redux';
import {
	userRequisitionDispatchTypes,
	userReq_ProjectInfoI,
	ADD_PROJECT_INFO,
} from '../types/userRequisitionTypes';

export const addUserReqProjectInfo = (projectInfo: userReq_ProjectInfoI) => (
	dispatch: Dispatch<userRequisitionDispatchTypes>
) => {
	dispatch({
		type: ADD_PROJECT_INFO,
		payload: projectInfo,
	});
};
