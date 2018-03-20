export const addTracking = tracker => ({
  type: 'START_ADD_TRACKING',
  tracker,
});

export const errorAddTracking = tracker => ({
  type: 'ERROR_ADD_TRACKING',
  tracker,
});

export const updateTracker = tracker => ({
  type: 'UPDATE_TRACKER',
  tracker,
});

export const startLoadTrackings = tracker => ({
  type: 'START_LOAD_TRACKINGS',
  tracker,
});

export const errorLoadTrackings = error => ({
  type: 'ERROR_LOAD_TRACKINGS',
  error,
});

export const loadTrackings = trackings => ({
  type: 'LOAD_TRACKINGS',
  trackings,
});

export const startLoadTrackers = () => ({
  type: 'START_LOAD_TRACKERS',
});

export const errorLoadTrackers = error => ({
  type: 'ERROR_LOAD_TRACKERS',
  error,
});

export const loadTrackers = trackers => ({
  type: 'LOAD_TRACKERS',
  trackers,
});
