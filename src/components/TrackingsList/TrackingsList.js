import React from 'react';
import PropTypes from 'prop-types';
import trackingsProp from '../../propTypes/trackings';

const TrackingList = props => (
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
);

TrackingList.propTypes = {
  trackings: PropTypes.arrayOf(PropTypes.shape(trackingsProp)).isRequired,
};

export default TrackingList;
