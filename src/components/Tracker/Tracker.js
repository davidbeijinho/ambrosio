import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import trackersProp from '../../propTypes/trackers';

const Tracker = props => (
  <div className="column is-4">
    <Link to={`/tracker/${props.id}`} >
      <div className="box">
        <h3>Name: {props.name}</h3>
        <p>ID: {props.id}</p>
        <p>Counter: {props.count}</p>
        <button onClick={props.onClickHandler} >Track</button>
      </div>
    </Link>
  </div>
);

Tracker.propTypes = {
  ...trackersProp,
  onClickHandler: PropTypes.func.isRequired,
};

export default Tracker;