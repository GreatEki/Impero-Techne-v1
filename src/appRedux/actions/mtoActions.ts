import { Dispatch } from 'redux';
import {
	ADD_PROJECT_INFO,
	MtoDispatchTypes,
	ProjectInfoI,
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
