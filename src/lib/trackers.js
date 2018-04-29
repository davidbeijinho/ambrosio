import axios from 'axios';
import store from '../store';
import * as trackersActions from '../actions';

const trackers = {
  loadData() {
    axios.get(`${__CONFIG__.API_URL}/api/trackers`)
      .then((response) => {
        store.dispatch(trackersActions.loadTrackers(response.data));
      })
      .catch((error) => {
        // TODO Add logger
        store.dispatch(trackersActions.errorLoadTrackers(error));
      });
  },
  addTracking(id) {
    axios.post(`${__CONFIG__.API_URL}/api/trackers/track`, { id })
      .then((response) => {
        store.dispatch(trackersActions.updateTracker({ count: response.data.count, id }));
      })
      .catch((error) => {
        // TODO Add logger
        store.dispatch(trackersActions.errorAddTracking(error));
      });
  },
  loadTrakings(id) {
    axios.get(`${__CONFIG__.API_URL}/api/trackings`, {
      params: { filter: { where: { tracker: { like: id } } } },
    })
      .then((response) => {
        store.dispatch(trackersActions.loadTrackings(response.data));
      })
      .catch((error) => {
        // TODO Add logger
        store.dispatch(trackersActions.errorLoadTrackings(error));
      });
  },
  addTracker(tracker) {
    axios.post(`${__CONFIG__.API_URL}/api/trackers/`, tracker)
      .then((response) => {
        store.dispatch(trackersActions.sucessAddTracker(response.data));
      })
      .catch((error) => {
        // TODO Add logger
        store.dispatch(trackersActions.errorAddTracker(error));
      });
  },
};

export default trackers;
