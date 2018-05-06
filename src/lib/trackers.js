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
  loadTracker(id) {
    return axios.get(`${__CONFIG__.API_URL}/api/trackers/${id}`);
    // return axios.get('http://localhost:4000/', id);
  },
};

export default trackers;
