import * as MiscT from '../types/miscellaneousTypes';

interface STATEI {
	loading: boolean;
	errors: string | null;
}

const INITIAL_STATE: STATEI = {
	loading: false,
	errors: null,
};

const miscellaneousReducer = (
	state: STATEI = INITIAL_STATE,
	action: MiscT.MiscellaneousDispatchTypes
): STATEI => {
	switch (action.type) {
		default:
			return state;
	}
};

export default miscellaneousReducer;
