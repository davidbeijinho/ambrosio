import React from 'react';
import PropTypes from 'prop-types';
import trackingsProp from '../../propTypes/trackings';

const renderTable = (trackings, withLocation) => trackings.map((tracking, index) => {
  if (withLocation) {
    return (
      <tr key={tracking.id} >
        <td>{index}</td>
        <td>{tracking.stamp}</td>
        <td>{JSON.stringify(tracking.location)}</td>
      </tr>);
  }
  return (
    <tr key={tracking.id} >
      <td>{index}</td>
      <td>{tracking.stamp}</td>
    </tr>);
});

const renderHeader = withLocation => (withLocation ?
  (
    <tr>
      <th>Index</th>
      <th>Time</th>
      <th>Location</th>
    </tr>
  )
  : (
    <tr>
      <th>Index</th>
      <th>Time</th>
    </tr>
  ));

const TrackingList = props => (
  <div>
    {props.error ? <h4>Error Loading Trackings</h4> : ''}
    {props.loading ? <h4>Loading Trackings</h4> : ''}
    { !props.error && !props.loading && !props.trackings.length ? <h4>No Tracking data</h4> : ''}
    { props.trackings.length ?
      <table className="table">
        <thead>
          {renderHeader(props.trackings[0].location)}
        </thead>
        <tfoot>
          {renderHeader(props.trackings[0].location)}
        </tfoot>
        <tbody>
          {renderTable(props.trackings, props.trackings[0].location)}
        </tbody>
      </table>
    : ''}
  </div>
);

TrackingList.propTypes = {
  trackings: PropTypes.arrayOf(PropTypes.shape(trackingsProp)).isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TrackingList;
