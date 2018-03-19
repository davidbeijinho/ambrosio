import axios from 'axios';
import store from '../store';
import { loadTrackings } from '../actions';
// import { loadTrackings, addTracking } from '../actions';

const trackers = {
  loadData() {
    axios.get('http://localhost:3000/api/trackers')
      .then((response) => {
        console.log(response);
        store.dispatch(loadTrackings(response.data));
      })
      .catch((error) => {
        // TODO Add logger
        console.log(error);
      });
  },
  addTracking(id) {
    axios.post('http://localhost:3000/api/trackers/track', { id })
      .then((response) => {
        console.log(response);
        // store.dispatch(addTracking(response.data));
      })
      .catch((error) => {
        // TODO Add logger
        console.log(error);
      });
  },
};

export default trackers;
