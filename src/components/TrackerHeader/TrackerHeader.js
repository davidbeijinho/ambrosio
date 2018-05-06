import React from 'react';
import PropTypes from 'prop-types';
import trackersProp from '../../propTypes/trackers';
import ButtonSuccess from '../Buttons/ButtonSuccess';
import DeleteTracker from '../../containers/DeleteTracker/DeleteTracker';
import TrackerInfo from '../TrackerInfo/TrackerInfo';

const TrackerHeader = props => (
  <div>
    {props.error ? <h4>Error Loading Tracker</h4> : ''}
    {props.loading ? <h4>Loading Tracker info</h4> : ''}

    {!props.error && !props.loading ?
      <div>
        <TrackerInfo tracker={props.tracker} />
        <DeleteTracker />
        <ButtonSuccess
          handleClick={() => { props.addTracking(props.tracker.id, props.tracker.geolocation); }}
        >Add Tracking
        </ButtonSuccess>
      </div>
    : ''}
  </div>
);

TrackerHeader.propTypes = {
  addTracking: PropTypes.func.isRequired,
  tracker: PropTypes.oneOfType([
    PropTypes.shape(trackersProp),
    PropTypes.shape(),
  ]).isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TrackerHeader;
