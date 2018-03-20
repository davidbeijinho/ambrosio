import trackersLib from '../lib/trackers';

const defaultState = {
  trackers: [],
  activeTracker: {
    data: [],
    loading: false,
    error: false,
  },
  fetched: false,
  loading: false,
};

const trackers = (state = defaultState, action) => {
  switch (action.type) {
    case 'START_ADD_TRACKING':
      trackersLib.addTracking(action.tracker);
      return state;
    case 'UPDATE_TRACKER':
      return {
        ...state,
        trackers: state.trackers.map(tracker =>
          (tracker.id === action.tracker.id
            ? { ...tracker, count: action.tracker.count }
            : tracker)),
      };
    case 'START_LOAD_TRACKERS':
      return { ...state, loading: true };
    case 'LOAD_TRACKERS':
      return {
        ...state,
        trackers: [...action.trackers],
        fetched: true,
        loading: false,
      };
    case 'START_LOAD_TRACKINGS':
      // TODO GET CURRENT TRACKER AND ADD IT TO ACTIVE TRACKER
      // AND RESET PREVIOUS DATA IF DIFFRENT
      trackersLib.loadTrakings(action.tracker);
      return {
        ...state,
        activeTracker: Object.assign({}, state.activeTracker, { loading: true }),
      };
    case 'LOAD_TRACKINGS':
      return {
        ...state,
        activeTracker: Object.assign({}, state.activeTracker, {
          data: action.trackings,
          loading: false,
        }),
      };
    default:
      return state;
  }
};

export default trackers;
