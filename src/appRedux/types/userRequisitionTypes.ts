export const ADD_PROJECT_INFO = 'ADD_PROJECT_INFO';

export interface userReq_ProjectInfoI {
	request_title: string;
	project_name: string;
	client_name: string;
	request_type: string;
}

export interface AddProjectInfoDispatch {
	type: typeof ADD_PROJECT_INFO;
	payload: userReq_ProjectInfoI;
}

export type userRequisitionDispatchTypes = AddProjectInfoDispatch;
