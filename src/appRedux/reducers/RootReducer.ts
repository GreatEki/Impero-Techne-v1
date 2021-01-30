import { combineReducers } from 'redux';
import userReducer from './userReducer';
import miscellaneousReducer from './miscellaneousReducer';
import adminModuleReducer from './adminModuleReducer';
import mtoReducer from './mtoReducer';
import userRequisitionReducer from './userRequisitionReducer';

const RootReducer = combineReducers({
	user: userReducer,
	miscellaneous: miscellaneousReducer,
	adminModule: adminModuleReducer,
	mto: mtoReducer,
	userRequisition: userRequisitionReducer,
});

export default RootReducer;
