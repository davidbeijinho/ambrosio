import React from 'react';
import PropTypes from 'prop-types';
import trackersProp from '../../propTypes/trackers';

const TrackerInfo = props => (
  <div>
    <h3>Name: {props.tracker.name}</h3>
    <h3>Id: {props.tracker.id}</h3>
    <h3>Count: {props.tracker.count}</h3>
    <h3>Geolocation: {props.tracker.geolocation ? 'Yes' : ' No'}</h3>
    <h3>Description: {props.tracker.description}</h3>
  </div>
);

TrackerInfo.propTypes = {
  tracker: PropTypes.oneOfType([
    PropTypes.shape(trackersProp),
    PropTypes.shape(),
  ]).isRequired,
};

export default TrackerInfo;
