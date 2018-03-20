import * as actions from './index';

const singleTracker = {
  name: 'tracker 1',
  id: 'aa1',
  count: 0,
};
const arrayTrackers = [
  singleTracker,
  {
    name: 'tracker 2',
    id: 'bb1',
    count: 0,
  },
];
const arrayTrackings = [
  {
    id: 'aa1',
    stamp: 'aa2',
    tracker: 'aa3',
  },
  {
    id: 'bb1',
    stamp: 'bb2',
    tracker: 'bb3',
  },
];
const sampleError = {
  message: 'error message',
};

describe('trackers actions', () => {
  it('addTracking should create START_ADD_TRACKING action', () => {
    expect(actions.addTracking(singleTracker)).toEqual({
      type: 'START_ADD_TRACKING',
      tracker: singleTracker,
    });
  });

  it('errorAddTracking should create ERROR_ADD_TRACKING action', () => {
    expect(actions.errorAddTracking(sampleError)).toEqual({
      type: 'ERROR_ADD_TRACKING',
      error: sampleError,
    });
  });

  it('updateTracker should create UPDATE_TRACKER action', () => {
    expect(actions.updateTracker(singleTracker)).toEqual({
      type: 'UPDATE_TRACKER',
      tracker: singleTracker,
    });
  });

  it('startLoadTrackings should create UPDATE_TRACKER action', () => {
    expect(actions.startLoadTrackings(singleTracker)).toEqual({
      type: 'START_LOAD_TRACKINGS',
      tracker: singleTracker,
    });
  });

  it('errorLoadTrackings should create ERROR_LOAD_TRACKINGS action', () => {
    expect(actions.errorLoadTrackings(sampleError)).toEqual({
      type: 'ERROR_LOAD_TRACKINGS',
      error: sampleError,
    });
  });

  it('loadTrackings should create LOAD_TRACKINGS action', () => {
    expect(actions.loadTrackings(arrayTrackings))
      .toEqual({
        type: 'LOAD_TRACKINGS',
        trackings: arrayTrackings,
      });
  });

  it('startLoadTrackers should create START_LOAD_TRACKERS action', () => {
    expect(actions.startLoadTrackers())
      .toEqual({
        type: 'START_LOAD_TRACKERS',
      });
  });

  it('errorLoadTrackers should create ERROR_LOAD_TRACKERS action', () => {
    expect(actions.errorLoadTrackers(sampleError)).toEqual({
      type: 'ERROR_LOAD_TRACKERS',
      error: sampleError,
    });
  });

  it('loadTrackers should create LOAD_TRACKERS action', () => {
    expect(actions.loadTrackers(arrayTrackers)).toEqual({
      type: 'LOAD_TRACKERS',
      trackers: arrayTrackers,
    });
  });
});
