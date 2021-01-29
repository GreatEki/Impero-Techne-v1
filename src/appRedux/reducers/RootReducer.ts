import { combineReducers } from 'redux';
import MaterialTakeOff from './MaterialTakeOff';
import userReducer from './userReducer';
import miscellaneousReducer from './miscellaneousReducer';
import adminModuleReducer from './adminModuleReducer';

const RootReducer = combineReducers({
	MaterialTakeOff,
	user: userReducer,
	miscellaneous: miscellaneousReducer,
	adminModule: adminModuleReducer,
});

export default RootReducer;
