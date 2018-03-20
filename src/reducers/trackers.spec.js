import trackers from './trackers';

global.navigator = {
  __CONFIG__: true,
};

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

describe('trackers reducer', () => {
  it('should handle initial state', () => {
    expect(trackers(undefined, {})).toEqual({
      trackers: [],
      activeTracker: {
        data: [],
        loading: false,
        error: false,
      },
      fetched: false,
      loading: false,
    });
  });

  it('should handle START_ADD_TRACKING', () => {
    expect(trackers(
      {
        trackers: [singleTracker],
      },
      {
        type: 'START_ADD_TRACKING',
        tracker: 0,
      },
    )).toEqual({
      trackers: [
        {
          name: 'tracker 1',
          id: 'aa1',
          count: 0,
        },
      ],
    });

    expect(trackers(
      {
        trackers: arrayTrackers,
      },
      {
        type: 'START_ADD_TRACKING',
        tracker: 1,
      },
    )).toEqual({
      trackers: arrayTrackers,
    });

    expect(trackers(
      {
        trackers: arrayTrackers,
      },
      {
        type: 'START_ADD_TRACKING',
        tracker: 3,
      },
    )).toEqual({
      trackers: arrayTrackers,
    });

    expect(trackers(
      {
        trackers: [singleTracker],
      },
      {
        type: 'UPDATE_TRACKER',
        tracker: {
          id: 'aa1',
          count: 27,
        },
      },
    ))
      .toEqual({
        trackers: [
          {
            name: 'tracker 1',
            count: 27,
            id: 'aa1',
          },
        ],
      });

    expect(trackers(
      {
        trackers: [singleTracker],
      },
      {
        type: 'UPDATE_TRACKER',
        tracker: {
          id: 'XXXXX',
          count: 27,
        },
      },
    ))
      .toEqual({
        trackers: [singleTracker],
      });
  });

  it('should handle LOAD_TRACKERS', () => {
    expect(trackers(undefined, {
      type: 'START_LOAD_TRACKERS',
    })).toEqual({
      activeTracker: {
        data: [],
        error: false,
        loading: false,
      },
      fetched: false,
      loading: true,
      trackers: [],
    });
  });

  it('should handle LOAD_TRACKERS', () => {
    expect(trackers(undefined, {
      type: 'LOAD_TRACKERS',
      trackers: arrayTrackers,
    })).toEqual({
      activeTracker: {
        data: [],
        error: false,
        loading: false,
      },
      fetched: true,
      loading: false,
      trackers: arrayTrackers,
    });
  });

  it('should handle START_LOAD_TRACKINGS', () => {
    expect(trackers(undefined, {
      type: 'START_LOAD_TRACKINGS',
      tracker: {
        id: 'aa1',
      },
    })).toEqual({
      activeTracker: {
        data: [],
        error: false,
        loading: true,
      },
      fetched: false,
      loading: false,
      trackers: [],
    });
  });

  it('should handle LOAD_TRACKINGS', () => {
    expect(trackers(undefined, {
      type: 'LOAD_TRACKINGS',
      trackings: arrayTrackings,
    })).toEqual({
      activeTracker: {
        data: arrayTrackings,
        error: false,
        loading: false,
      },
      fetched: false,
      loading: false,
      trackers: [],
    });
  });
});
