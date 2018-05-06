import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
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
  newTracking: {
    tracker: {},
    tracking: {},
    loading: false,
    error: false,
    sending: false,
  },
  deleteTracker: {
    tracker: {},
    trackings: [],
    error: false,
    sending: false,
  },
};

const trackers = (state = defaultState, action) => {
  const isCurrentTracker = get(state.activeTracker.tracker, 'id', false) === get(action, 'id');
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
    case constants.LOAD_TRACKER.SUCCESS:
      return {
        ...state,
        activeTracker: {
          ...state.activeTracker,
          loading: false,
          error: false,
          fetched: true,
          tracker: { ...action.tracker },
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
      // TODO DO SOMETHING
    case constants.ADD_TRACKING.START:
      return state;
      // TODO DO SOMETHING
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
      // TODO DO SOMETHING
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
    case constants.DELETE_TRACKER.START:
      return {
        ...state,
        deleteTracker: {
          ...state.deleteTracker,
          tracker: isCurrentTracker ?
            { ...state.activeTracker.tracker } :
            state.trackers.filter(tracker => tracker.id === action.id),
          trackings: isCurrentTracker ? { ...state.activeTrackings.trackings } : [],
          sending: true,
          error: false,
        },
        activeTracker: {
          ...state.activeTracker,
          tracker: isCurrentTracker ? {} : { ...state.activeTracker.tracker },
        },
        activeTrackings: {
          ...state.activeTrackings,
          trackings: isCurrentTracker ? [] : { ...state.activeTrackings.trackings },
        },
        trackers: state.trackers.filter(tracker => tracker.id !== action.id),
      };
    case constants.DELETE_TRACKER.SUCCESS:
      return {
        ...state,
        deleteTracker: {
          ...state.deleteTracker,
          tracker: {},
          trackings: [],
          sending: false,
          error: false,
        },
      };
    case constants.DELETE_TRACKER.ERROR:
      return {
        ...state,
        activeTracker: {
          ...state.activeTracker,
          tracker: isEmpty(state.activeTracker.tracker) ?
            { ...state.deleteTracker.tracker } :
            { ...state.activeTracker.tracker },
        },
        activeTrackings: {
          ...state.activeTrackings,
          trackings: isEmpty(state.activeTrackings.trackings) ?
            { ...state.deleteTracker.trackings } :
            { ...state.activeTrackings.trackings },

        },
        deleteTracker: {
          ...state.deleteTracker,
          tracker: {},
          trackings: [],
          sending: false,
          error: true,
        },
      };
    default:
      return state;
  }
};

export default trackers;
