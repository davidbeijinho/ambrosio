import trackers from './trackers';

describe('trackers reducer', () => {
  it('should handle initial state', () => {
    expect(trackers(undefined, {})).toEqual({
      trackers: [],
      fetched: false,
      loading: false,
    });
  });

  it('should handle ADD_TODO', () => {
    expect(trackers(
      {
        trackers: [
          {
            name: 'tracker 1',
            id: 0,
            count: 0,
          },
        ],
      },
      {
        type: 'ADD_TRACKING',
        id: 0,
      },
    )).toEqual({
      trackers: [
        {
          name: 'tracker 1',
          id: 0,
          count: 1,
        },
      ],
    });

    expect(trackers(
      {
        trackers: [
          {
            text: 'Run the tests 0',
            count: 10,
            id: 0,
          },
          {
            text: 'Run the tests 1',
            count: 20,
            id: 1,
          },
        ],
      },
      {
        type: 'ADD_TRACKING',
        id: 1,
      },
    )).toEqual({
      trackers: [
        {
          text: 'Run the tests 0',
          count: 10,
          id: 0,
        },
        {
          text: 'Run the tests 1',
          count: 21,
          id: 1,
        },
      ],
    });

    expect(trackers(
      {
        trackers: [
          {
            text: 'Run the tests 0',
            count: 10,
            id: 0,
          },
          {
            text: 'Run the tests 1',
            count: 20,
            id: 1,
          },
          {
            text: 'Run the tests 2',
            count: 30,
            id: 2,
          },
        ],
      },
      {
        type: 'ADD_TRACKING',
        id: 1,
      },
    )).toEqual({
      trackers: [
        {
          text: 'Run the tests 0',
          count: 10,
          id: 0,
        },
        {
          text: 'Run the tests 1',
          count: 21,
          id: 1,
        },
        {
          text: 'Run the tests 2',
          count: 30,
          id: 2,
        },
      ],
    });
  });

  it('should handle LOAD_TRACKINGS', () => {
    expect(trackers(undefined, {
      type: 'LOAD_TRACKINGS',
      trackers: [
        {
          text: 'Run the tests',
          completed: false,
          id: 0,
        },
      ],
    })).toEqual({
      fetched: false,
      loading: false,
      trackers: [
        {
          text: 'Run the tests',
          completed: false,
          id: 0,
        },
      ],
    });
  });
});
