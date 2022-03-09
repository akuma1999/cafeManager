import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/index";
import createSagaMiddleWare from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

export const ConfigureStore = () => {
	const middlewares = [thunk];
	const enhancers = [applyMiddleware(...middlewares)];
	const store = createStore(rootReducer, composeWithDevTools(...enhancers));
	return store;
};
