import trackersLib from '../lib/trackers';
import { startAddTracking, successAddTracking, errorAddTracking } from './index';

// TODO LOGGER ERROR

function addTracking(id) {
  return (dispatch) => {
    dispatch(startAddTracking());
    trackersLib.addTracking(id)
      .then(response => dispatch(successAddTracking({ count: response.data.count, id })))
      .catch(error => dispatch(errorAddTracking(error)));
  };
}

export default addTracking;
