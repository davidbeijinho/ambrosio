import React from 'react';
import PropTypes from 'prop-types';
import trackersProp from '../../propTypes/trackers';
import DeleteTracker from '../DeleteTracker/DeleteTracker';

const TrackerInfo = props => (
  <div>
    {props.error ? <h4>Error Loading Tracker</h4> : ''}
    {props.loading ? <h4>Loading Tracker info</h4> : ''}

    {!props.error && !props.loading ?
      <div>
        <h3>Name: {props.tracker.name}</h3>
        <h3>ID: {props.tracker.id}</h3>
        <h3>Count: {props.tracker.count}</h3>
        <h3>Geolocation: {props.tracker.geolocation ? 'Yes' : ' No'}</h3>
        <h3>Description: {props.tracker.description}</h3>
        <DeleteTracker />
      </div>
    : ''}
  </div>
);

TrackerInfo.propTypes = {
  tracker: PropTypes.oneOfType([
    PropTypes.shape(trackersProp),
    PropTypes.shape(),
  ]).isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TrackerInfo;
