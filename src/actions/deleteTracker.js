import trackersLib from '../lib/trackers';
import { startDelteTracker, successDelteTracker, errorDelteTracker } from './index';

// TODO LOGGER ERROR

function deleteTracker(id) {
  return (dispatch) => {
    dispatch(startDelteTracker(id));
    trackersLib.deleteTracker(id)
      .then(response => dispatch(successDelteTracker(response.data)))
      .catch(error => dispatch(errorDelteTracker(error)));
  };
}
export default deleteTracker;
