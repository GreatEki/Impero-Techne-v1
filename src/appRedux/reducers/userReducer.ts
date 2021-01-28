// import { USERI, UserDispatchTypes, LOGIN_USER } from '../types/userTypes';
import * as UserT from '../types/userTypes';

interface STATE {
	user?: UserT.USERI;
	error: string | null;
	loading: boolean;
}

const INITIAL_STATE: STATE = {
	user: {
		token: '',
		expiration: '',
		username: '',
		userRoles: [],
		phoneNumber: '',
		firstName: '',
		lastName: '',
		otherName: '',
		dateOfBirth: '',
		emailAddress: '',
		emailConfirmed: false,
		addessLine1: '',
		addressLine2: '',
		country: '',
		city: '',
		state: '',
		profilePicture: '',
		rating: null,
		review: null,
	},
	error: null,
	loading: false,
};

const userReducer = (
	state = INITIAL_STATE,
	action: UserT.UserDispatchTypes
): STATE => {
	switch (action.type) {
		case UserT.LOADING:
			return {
				...state,
				loading: true,
			};
		case UserT.LOADING_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case UserT.CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};

		case UserT.LOGIN_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default userReducer;
