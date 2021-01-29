import * as MiscT from '../types/miscellaneousTypes';

interface STATEI {
	loading: boolean;
	errors: string | null;
	countries: MiscT.CountryI[];
	projects: MiscT.ProjectsI[];
}

const INITIAL_STATE: STATEI = {
	loading: false,
	errors: null,
	countries: [],
	projects: [],
};

const miscellaneousReducer = (
	state: STATEI = INITIAL_STATE,
	action: MiscT.MiscellaneousDispatchTypes
): STATEI => {
	switch (action.type) {
		case MiscT.GET_ALL_COUNTRY:
			return {
				...state,
				countries: action.payload,
				loading: false,
			};

		case MiscT.GET_ALL_PROJECTS:
			return {
				...state,
				projects: action.payload,
			};
		default:
			return state;
	}
};

export default miscellaneousReducer;
