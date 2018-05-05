import trackersLib from '../lib/trackers';
import { startLoadTrackings, successloadTrackings, errorLoadTrackings } from './index';

// TODO LOGGER ERROR

function loadTrackings(id) {
  return (dispatch) => {
    dispatch(startLoadTrackings(id));
    trackersLib.loadTrakings(id)
      .then(response => dispatch(successloadTrackings(response.data)))
      .catch(error => dispatch(errorLoadTrackings(error)));
  };
}

export default loadTrackings;
