import trackersLib from '../lib/trackers';
import { startLoadTracker, successLoadTracker, errorLoadTracker } from './index';

// TODO LOGGER ERROR

function selectTracker(id) {
  return (dispatch, getState) => {
    dispatch(startLoadTracker(id));
    const selectedTracker = getState().trackers.trackers.find(tracker => tracker.id === id);
    if (selectedTracker) {
      dispatch(successLoadTracker(selectedTracker));
    } else {
      trackersLib.loadTracker(id)
        .then(response => dispatch(successLoadTracker(response.data)))
        .catch(error => dispatch(errorLoadTracker(error)));
    }
  };
}

export default selectTracker;
