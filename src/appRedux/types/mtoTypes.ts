export const ADD_PROJECT_INFO = 'ADD_PROJECT_INFO';

export interface ProjectInfoI {
	project_name: string;
	client_name: string;
	company_name: string;
	discipline: string;
	discipline_subType: string;
	request_formName: string;
}

export interface AddProjectInfoDispatch {
	type: typeof ADD_PROJECT_INFO;
	payload: ProjectInfoI;
}

export type MtoDispatchTypes = AddProjectInfoDispatch;
