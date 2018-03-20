import React from 'react';
import PropTypes from 'prop-types';
import TrackingList from '../TrackingsList/TrackingsList';
import trackingsProp from '../../propTypes/trackings';

const TrackerInfo = props => (
  <TrackingList trackings={props.trackings} />
);

TrackerInfo.propTypes = {
  trackings: PropTypes.arrayOf(PropTypes.shape(trackingsProp)).isRequired,
};

export default TrackerInfo;
