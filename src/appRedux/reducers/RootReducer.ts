import { combineReducers } from 'redux';
import MaterialTakeOff from './MaterialTakeOff';
import userReducer from './userReducer';
import miscellaneousReducer from './miscellaneousReducer';
import adminModuleReducer from './adminModuleReducer';
import mtoReducer from './mtoReducer';

const RootReducer = combineReducers({
	MaterialTakeOff,
	user: userReducer,
	miscellaneous: miscellaneousReducer,
	adminModule: adminModuleReducer,
	mto: mtoReducer,
});

export default RootReducer;
