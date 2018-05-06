import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import trackersProp from '../../propTypes/trackers';
import ButtonSuccess from '../Buttons/ButtonSuccess';

const Tracker = (props) => {
  const handleClick = (e) => {
    e.stopPropagation();
    props.onClickHandler();
  };

  const navigate = () => {
    props.history.push(`/tracker/${props.id}`);
  };

  return (
    <div
      className="column is-4"
      onClick={navigate}
      onKeyPress={navigate}
      role="button"
      tabIndex={0}
    >
      <div className="box">
        <h3>Name: {props.name}</h3>
        <p>ID: {props.id}</p>
        <p>Counter: {props.count}</p>
        <ButtonSuccess handleClick={handleClick} >Track</ButtonSuccess>
      </div>
    </div>
  );
};

Tracker.propTypes = {
  ...trackersProp,
  onClickHandler: PropTypes.func.isRequired,
};

export default withRouter(Tracker);
