import { combineReducers } from 'redux';
import MaterialTakeOff from './MaterialTakeOff';
import userReducer from './userReducer';
import miscellaneousReducer from './miscellaneousReducer';

const RootReducer = combineReducers({
	MaterialTakeOff,
	user: userReducer,
	miscellaneous: miscellaneousReducer,
});

export default RootReducer;
