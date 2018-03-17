import * as actions from './index';

describe('trackers actions', () => {
  it('addTracking should create ADD_TRACKING action', () => {
    expect(actions.addTracking({
      id: 0,
      name: 'Use Redux',
      count: 15,
    })).toEqual({
      type: 'ADD_TRACKING',
      tracker: {
        id: 0,
        name: 'Use Redux',
        count: 15,
      },
    });
  });

  it('loadTrackings should create LOAD_TRACKINGS action', () => {
    expect(actions.loadTrackings([
      {
        name: 'tracker 1',
        id: 0,
        count: 0,
      },
      {
        name: 'tracker 2',
        id: 1,
        count: 0,
      },
    ])).toEqual({
      type: 'LOAD_TRACKINGS',
      trackers: [
        {
          name: 'tracker 1',
          id: 0,
          count: 0,
        },
        {
          name: 'tracker 2',
          id: 1,
          count: 0,
        },
      ],
    });
  });
});
