import trackersLib from '../lib/trackers';
import { startAddTracker, successAddTracker, errorAddTracker } from './index';

// TODO LOGGER ERROR

function addTracker(tracker) {
  return (dispatch) => {
    dispatch(startAddTracker());
    trackersLib.addTracker(tracker)
      .then(response => dispatch(successAddTracker(response.data)))
      .catch(error => dispatch(errorAddTracker(error)));
  };
}

export default addTracker;
