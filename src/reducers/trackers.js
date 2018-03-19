import trackersLib from '../lib/trackers';

const defaultState = {
  trackers: [],
  fetched: false,
  loading: false,
};

const trackers = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TRACKING':
      trackersLib.addTracking(action.tracker);
      return {
        ...state,
        trackers: state.trackers.map(tracker =>
          (tracker.id === action.tracker
            ? { ...tracker, count: tracker.count + 1 }
            : tracker)),
      };
    case 'LOAD_TRACKINGS':
      return {
        ...state,
        trackers: [...action.trackers],
      };
    default:
      return state;
  }
};

export default trackers;
