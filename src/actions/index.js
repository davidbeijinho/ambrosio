import * as constants from '../lib/constants';
// LOAD TRACKERS

export const startLoadTrackers = () => ({
  type: constants.LOAD_TRACKERS.START,
});

export const errorLoadTrackers = error => ({
  type: constants.LOAD_TRACKERS.ERROR,
  error,
});

export const successloadTrackers = trackers => ({
  type: constants.LOAD_TRACKERS.SUCCESS,
  trackers,
});

// LOAD TRACKINGS

export const startLoadTrackings = id => ({
  type: constants.LOAD_TRACKINGS.START,
  id,
});

export const errorLoadTrackings = error => ({
  type: constants.LOAD_TRACKINGS.ERROR,
  error,
});

export const successloadTrackings = trackings => ({
  type: constants.LOAD_TRACKINGS.SUCCESS,
  trackings,
});

// LOAD TRACKER

export const startLoadTracker = id => ({
  type: constants.LOAD_TRACKER.START,
  id,
});

export const errorLoadTracker = error => ({
  type: constants.LOAD_TRACKER.ERROR,
  error,
});

export const successLoadTracker = tracker => ({
  type: constants.LOAD_TRACKER.SUCCESS,
  tracker,
});

// ADD TRACKER
// TODO should i pass some info when start add tracker
export const startAddTracker = () => ({
  type: constants.ADD_TRACKER.START,
});

export const errorAddTracker = error => ({
  type: constants.ADD_TRACKER.ERROR,
  error,
});

export const successAddTracker = tracker => ({
  type: constants.ADD_TRACKER.SUCCESS,
  tracker,
});

// ADD TRACKING

export const startAddTracking = () => ({
  type: constants.ADD_TRACKING.START,
});

export const errorAddTracking = error => ({
  type: constants.ADD_TRACKING.ERROR,
  error,
});

export const successAddTracking = tracker => ({
  type: constants.ADD_TRACKING.SUCCESS,
  tracker,
});

// UPDATE TRACKER

export const startUpdateTracker = tracker => ({
  type: constants.UPDATE_TRACKER.START,
  tracker,
});

export const errorUpdateTracker = error => ({
  type: constants.UPDATE_TRACKER.ERROR,
  error,
});

export const successUpdateTracker = tracker => ({
  type: constants.UPDATE_TRACKER.SUCCESS,
  tracker,
});

// DELETE TRACKER

export const startDelteTracker = id => ({
  type: constants.DELETE_TRACKER.START,
  id,
});

export const errorDelteTracker = error => ({
  type: constants.DELETE_TRACKER.ERROR,
  error,
});

export const successDelteTracker = response => ({
  type: constants.DELETE_TRACKER.SUCCESS,
  response,
});
