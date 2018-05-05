import axios from 'axios';

const trackers = {
  loadTrackers() {
    return axios.get(`${__CONFIG__.API_URL}/api/trackers`);
  },
  addTracking(id) {
    return axios.post(`${__CONFIG__.API_URL}/api/trackers/track`, { id });
  },
  loadTrakings(id) {
    return axios.get(`${__CONFIG__.API_URL}/api/trackings`, {
      params: { filter: { where: { tracker: { like: id } } } },
    });
  },
  addTracker(tracker) {
    return axios.post(`${__CONFIG__.API_URL}/api/trackers/`, tracker);
  },
  // getActiveTracker(trackersList, id) {
  //   const activeTracker = trackersList.find(tracker => tracker.id === id);
  //   if (activeTracker) {
  //     return activeTracker;
  //   }
  //   // store.dispatch({type:'aaaa'});

  //   // store.dispatch(trackersActions.loadTracker(id));
  //   return {};
  // },
  loadTracker(id) {
    // return axios.get(`${__CONFIG__.API_URL}/api/trackers/${id}`);
    return axios.get('http://localhost:4000/');
    // .then(value => new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(value);
    //   }, 5000);
    // }));
  },
};

export default trackers;
