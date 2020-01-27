import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from '../reducers/userReducer';
import apiReducer from '../reducers/apiReducer';

const rootReducer = combineReducers({
  users: userReducer,
  api: apiReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
