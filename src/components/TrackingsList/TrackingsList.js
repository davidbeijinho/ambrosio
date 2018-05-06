import React from 'react';
import PropTypes from 'prop-types';
import trackingsProp from '../../propTypes/trackings';

const TrackingList = props => (
  <div>
    {props.error ? <h4>Error Loading Tracker</h4> : ''}
    {props.loading ? <h4>Loading Tracker info</h4> : ''}
    { !props.error && !props.loading ?
      <table className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Time</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Index</th>
            <th>Time</th>
          </tr>
        </tfoot>
        <tbody>
          {props.trackings.map((tracking, index) => (
            <tr key={tracking.id} >
              <td>{index}</td>
              <td>{tracking.stamp}</td>
            </tr>
      ))}
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
