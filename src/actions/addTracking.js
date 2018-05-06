import trackersLib from '../lib/trackers';
import loadTrackings from './loadTrackings';
import getLocation from '../lib/utils.location';

import { startAddTracking, successAddTracking, errorAddTracking } from './index';

function sendTracking(id, location) {
  if (location) {
    // TODO I CAN PASS OPTIONS https://developer.mozilla.org/es/docs/Web/API/PositionOptions
    return getLocation().then(position => trackersLib.addTrackingWithLocation(id, position.coords))
      .catch(err =>
      // TODO ADD TO LOGER AND UI
        trackersLib.addTracking(id, err));
  }
  return trackersLib.addTracking(id);
}

function addTracking(id, location) {
  return (dispatch) => {
    dispatch(startAddTracking());
    sendTracking(id, location)
      .then((response) => {
        dispatch(successAddTracking({ count: response.data.count, id }));
        dispatch(loadTrackings(id));
      })
      // TODO LOGGER ERROR
      .catch(error => dispatch(errorAddTracking(error)));
  };
}

export default addTracking;
