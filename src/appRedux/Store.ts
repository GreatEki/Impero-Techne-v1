import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

const Store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

// defining the type for type of our store
export type RootStore = ReturnType<typeof rootReducer>;

export default Store;
