import React from 'react';
import PropTypes from 'prop-types';
import trackersProp from '../propTypes/trackers';

const Tracker = props => (
  <div className="column is-4">
    <div className="box">
      <h3>Name: {props.name}</h3>
      <p>ID: {props.id}</p>
      <p>Counter: {props.count}</p>
      <button onClick={props.onClickHandler} >Track</button>
    </div>
  </div>
);

Tracker.propTypes = {
  ...trackersProp,
  onClickHandler: PropTypes.func.isRequired,
};

export default Tracker;
