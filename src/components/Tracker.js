import React from 'react';

const Tracker = props => (
  <div className="column is-4">
    <div className="box">
      <h3>Name: {props.name}</h3>
      <p>ID: {props.id}</p>
      <p>Counter: {props.count}</p>
    </div>
  </div>
);

export default Tracker;
