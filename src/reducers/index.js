import { combineReducers } from 'redux';
import trackers from './trackers';

const ambrosioApp = combineReducers({
  trackers,
});

export default ambrosioApp;
