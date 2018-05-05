import React from 'react';
import PropTypes from 'prop-types';
import TrackingList from '../TrackingsList/TrackingsList';
import trackingsProp from '../../propTypes/trackings';
import trackersProp from '../../propTypes/trackers';

const TrackerInfo = props => (
  <div>
    {/* {props.tracker.name ? */}
      <h3>{props.tracker.name}</h3>
    {/* : */}
      {/* <h4>No tracker data</h4> */}
    {/* } */}
    {props.trackings.length ?
      <TrackingList trackings={props.trackings} />
    :
      <h4>No tracking data</h4>
    }
  </div>
);

TrackerInfo.propTypes = {
  tracker: PropTypes.oneOfType([
    PropTypes.shape(trackersProp),
    PropTypes.shape(),
  ]).isRequired,
  trackings: PropTypes.arrayOf(PropTypes.shape(trackingsProp)).isRequired,
};

export default TrackerInfo;
