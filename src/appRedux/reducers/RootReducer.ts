import { combineReducers } from 'redux';
import MaterialTakeOff from './MaterialTakeOff';
import userReducer from './userReducer';

const RootReducer = combineReducers({
	MaterialTakeOff,
	user: userReducer,
});

export default RootReducer;
