import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(reduxThunk, logger));

export default store;
