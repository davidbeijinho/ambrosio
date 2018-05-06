import PropTypes from 'prop-types';
import React from 'react';
import Tracker from '../Tracker/Tracker';
import trackersProp from '../../propTypes/trackers';

const TrackersList = ({ trackers, addTracking }) => {
  if (!trackers.trackers.length) {
    return (<h1>No data</h1>);
  }

  const trackersList = trackers.trackers.map(tracker => (
    <Tracker
      key={tracker.id}
      {...tracker}
      onClickHandler={() => addTracking(tracker.id, tracker.geolocation)}
    />
  ));

  return (
    <div className="section">
      <h2 className="is-size-2">Trackers List</h2>
      <br />
      <div className="columns is-multiline">{trackersList}</div>
    </div>
  );
};

TrackersList.propTypes = {
  addTracking: PropTypes.func.isRequired,
  trackers: PropTypes.shape({
    trackers: PropTypes.arrayOf(PropTypes.shape(trackersProp)).isRequired,
  }).isRequired,
};

export default TrackersList;

