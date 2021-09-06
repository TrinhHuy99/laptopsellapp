import { createStore, applyMiddleware } from "redux";
import rootReducer from "reducers";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from '../saga/index';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);
sagaMiddleware.run(saga);
export default store;