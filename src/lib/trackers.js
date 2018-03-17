import axios from 'axios';
import store from '../store';
import { loadTrackings } from '../actions';

const trackers = {
  loadData() {
    axios.get('/mock/trackers.json')
      .then((response) => {
        console.log(response);
        store.dispatch(loadTrackings(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default trackers;
