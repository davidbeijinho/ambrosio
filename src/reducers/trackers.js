import * as constants from '../lib/constants';

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
    case constants.LOAD_TRACKER.START:
      return {
        ...state,
        activeTracker: {
          ...state.activeTracker,
          loading: true,
          error: false,
        },
      };
    case constants.LOAD_TRACKER.ERROR:
      return {
        ...state,
        activeTracker: {
          ...state.activeTracker,
          loading: false,
          error: true,
        },
      };
    case constants.LOAD_TRACKER.SUCCESS:
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
    case constants.ADD_TRACKER.START:
      return {
        ...state,
        newTracker: {
          ...state.newTracker,
          sending: true,
        },
      };
    case constants.ADD_TRACKER.SUCCESS:
      return {
        ...state,
        newTracker: {
          ...state.newTracker,
          sending: false,
          tracker: { ...action.tracker },
        },
        trackers: [...state.trackers, action.tracker],
      };
    case constants.ADD_TRACKER.ERROR:
      return state;
    case constants.ADD_TRACKING.START:
      return state;
    case constants.ADD_TRACKING.SUCCESS:
      return {
        ...state,
        trackers: state.trackers.map(tracker =>
          (tracker.id === action.tracker.id
            ? { ...tracker, count: action.tracker.count }
            : tracker)),
      };
      // TODO if active tracker add to trakings
    case constants.ADD_TRACKING.ERROR:
      return state;
    case constants.LOAD_TRACKINGS.START:
      return {
        ...state,
        activeTrackings: {
          ...state.activeTrackings,
          loading: true,
        },
      };
    case constants.LOAD_TRACKINGS.SUCCESS:
      return {
        ...state,
        activeTrackings: {
          ...state.activeTrackings,
          loading: false,
          error: false,
          trackings: action.trackings,
        },
      };
    case constants.LOAD_TRACKINGS.ERROR:
      return {
        ...state,
        activeTrackings: {
          ...state.activeTrackings,
          loading: false,
          error: true,
        },
      };
    case constants.LOAD_TRACKERS.START:
      return {
        ...state,
        loading: true,
        error: false,
        fetched: false,
      };
    case constants.LOAD_TRACKERS.SUCCESS:
      return {
        ...state,
        trackers: [...action.trackers],
        fetched: true,
        loading: false,
        error: false,
      };
    case constants.LOAD_TRACKERS.ERROR:
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
