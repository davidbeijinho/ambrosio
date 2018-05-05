import trackersLib from '../lib/trackers';
import { startLoadTrackers, successloadTrackers, errorLoadTrackers } from './index';

// TODO LOGGER ERROR

function loadTrackers() {
  return (dispatch) => {
    dispatch(startLoadTrackers());
    trackersLib.loadTrackers()
      .then(response => dispatch(successloadTrackers(response.data)))
      .catch(error => dispatch(errorLoadTrackers(error)));
  };
}

export default loadTrackers;
