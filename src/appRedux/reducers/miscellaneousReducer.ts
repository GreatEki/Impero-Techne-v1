import * as MiscT from '../types/miscellaneousTypes';

interface STATEI {
	loading: boolean;
	errors: string | null;
	countries: MiscT.CountryI[];
	projects: MiscT.ProjectsI[];
	companies: MiscT.CompaniesI[];
	states: MiscT.States[];
}

const INITIAL_STATE: STATEI = {
	loading: false,
	errors: null,
	countries: [],
	projects: [],
	companies: [],
	states: [],
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
		case MiscT.GET_ALL_COMPANIES:
			return {
				...state,
				companies: action.payload,
			};
		case MiscT.GET_ALL_STATES:
			return {
				...state,
				states: action.payload,
			};
		default:
			return state;
	}
};

export default miscellaneousReducer;
