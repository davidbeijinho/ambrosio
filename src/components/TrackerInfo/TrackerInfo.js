import React from 'react';
import PropTypes from 'prop-types';
import trackersProp from '../../propTypes/trackers';
import DeleteTracker from '../DeleteTracker/DeleteTracker';
import ButtonSuccess from '../Buttons/ButtonSuccess';

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
        <ButtonSuccess text="Add Tracking" handleClick={() => { props.addTracking(props.tracker.id, props.tracker.geolocation); }} />
      </div>
    : ''}
  </div>
);

TrackerInfo.propTypes = {
  addTracking: PropTypes.func.isRequired,
  tracker: PropTypes.oneOfType([
    PropTypes.shape(trackersProp),
    PropTypes.shape(),
  ]).isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TrackerInfo;
