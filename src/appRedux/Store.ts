import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

const composeEnhancers =
	(window as any)._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const Store = createStore(
	rootReducer,
	composeWithDevTools(composeEnhancers(applyMiddleware(thunk)))
);

// defining the type for type of our store
export type RootStore = ReturnType<typeof rootReducer>;

export default Store;
