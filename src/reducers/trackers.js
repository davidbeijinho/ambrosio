const defaultState = {
  trackers: [],
  loading: false,
  error: false,
  fetched: false,
  activeTracker: {
    tracker: {},
    loading: false,
    error: false,
    fetched: false,
  },
  activeTrackings: {
    trackings: [],
    loading: false,
    error: false,
    fetched: false,
  },
  newTracker: {
    tracker: {},
    loading: false,
    error: false,
    sending: false,
  },
};

const trackers = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_TRACKER_START':
      return {
        ...state,
        activeTracker: {
          ...state.activeTracker,
          loading: true,
          error: false,
        },
      };
    case 'LOAD_TRACKER_ERROR':
      return {
        ...state,
        activeTracker: {
          ...state.activeTracker,
          loading: false,
          error: true,
        },
      };
    case 'LOAD_TRACKER_SUCCESS':
      return {
        ...state,
        activeTracker: {
          ...state.activeTracker,
          loading: false,
          error: false,
          fetched: true,
          tracker: Object.assign({}, action.tracker),
        },
      };
    case 'ADD_TRACKER_START':
      return {
        ...state,
        newTracker: {
          ...state.newTracker,
          sending: true,
        },
      };
    case 'ADD_TRACKER_SUCCESS':
      return {
        ...state,
        newTracker: {
          ...state.newTracker,
          sending: false,
          tracker: { ...action.tracker },
        },
        trackers: [...state.trackers, action.tracker],
      };
    case 'ADD_TRACKER_ERROR':
      return state;
    case 'ADD_TRACKING_START':
      return state;
    case 'ADD_TRACKING_SUCCESS':
      return {
        ...state,
        trackers: state.trackers.map(tracker =>
          (tracker.id === action.tracker.id
            ? { ...tracker, count: action.tracker.count }
            : tracker)),
      };
      // TODO if active tracker add to trakings
    case 'ADD_TRACKING_ERROR':
      return state;
    case 'LOAD_TRACKINGS_START':
      return {
        ...state,
        activeTrackings: {
          ...state.activeTrackings,
          loading: true,
        },
      };
    case 'LOAD_TRACKINGS_SUCCESS':
      return {
        ...state,
        activeTrackings: {
          ...state.activeTrackings,
          loading: false,
          error: false,
          trackings: action.trackings,
        },
      };
    case 'LOAD_TRACKINGS_ERROR':
      return {
        ...state,
        activeTrackings: {
          ...state.activeTrackings,
          loading: false,
          error: true,
        },
      };
    case 'LOAD_TRACKERS_START':
      return {
        ...state,
        loading: true,
        error: false,
        fetched: false,
      };
    case 'LOAD_TRACKERS_SUCCESS':
      return {
        ...state,
        trackers: [...action.trackers],
        fetched: true,
        loading: false,
        error: false,
      };
    case 'LOAD_TRACKERS_ERROR':
      return {
        ...state,
        loading: false,
        fetched: false,
        error: true,
      };
    default:
      return state;
  }
};

export default trackers;
