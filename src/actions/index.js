export const addTracking = tracker => ({
  type: 'ADD_TRACKING',
  tracker,
});

export const loadTrackings = trackers => ({
  type: 'LOAD_TRACKINGS',
  trackers,
});
