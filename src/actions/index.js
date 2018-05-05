// LOAD TRACKERS

export const startLoadTrackers = () => ({
  type: 'LOAD_TRACKERS_START',
});

export const errorLoadTrackers = error => ({
  type: 'LOAD_TRACKERS_ERROR',
  error,
});

export const successloadTrackers = trackers => ({
  type: 'LOAD_TRACKERS_SUCCESS',
  trackers,
});

// LOAD TRACKINGS

export const startLoadTrackings = id => ({
  type: 'LOAD_TRACKINGS_START',
  id,
});

export const errorLoadTrackings = error => ({
  type: 'LOAD_TRACKINGS_ERROR_',
  error,
});

export const successloadTrackings = trackings => ({
  type: 'LOAD_TRACKINGS_SUCCESS',
  trackings,
});

// LOAD TRACKER

export const startLoadTracker = id => ({
  type: 'LOAD_TRACKER_START',
  id,
});

export const errorLoadTracker = error => ({
  type: 'LOAD_TRACKER_ERROR',
  error,
});

export const successLoadTracker = tracker => ({
  type: 'LOAD_TRACKER_SUCCESS',
  tracker,
});

// ADD TRACKER

export const startAddTracker = () => ({
  type: 'ADD_TRACKER_START',
});

export const errorAddTracker = error => ({
  type: 'ADD_TRACKER_ERROR',
  error,
});

export const successAddTracker = tracker => ({
  type: 'ADD_TRACKER_SUCCESS',
  tracker,
});

// ADD TRACKING

export const startAddTracking = () => ({
  type: 'ADD_TRACKING_START',
});

export const errorAddTracking = error => ({
  type: 'ADD_TRACKING_ERROR',
  error,
});

export const successAddTracking = tracker => ({
  type: 'ADD_TRACKING_SUCCESS',
  tracker,
});

// UPDATE TRACKER

export const startUpdateTracker = tracker => ({
  type: 'UPDATE_TRACKER_START',
  tracker,
});

export const errorUpdateTracker = error => ({
  type: 'UPDATE_TRACKER_ERROR',
  error,
});

export const successUpdateTracker = tracker => ({
  type: 'UPDATE_TRACKER_SUCCESS',
  tracker,
});

// DELETE TRACKER

export const startDelteTracker = tracker => ({
  type: 'DELETE_TRACKER_START',
  tracker,
});

export const errorDelteTracker = error => ({
  type: 'DELETE_TRACKER_ERROR',
  error,
});

export const successDelteTracker = tracker => ({
  type: 'DELETE_TRACKER_SUCCESS',
  tracker,
});
