import React from 'react';
import Tracker from '../components/Tracker';

const TrackersList = (props) => {
  console.log(props);
  console.log((!props.trackers.trackers.length));
  if (!props.trackers.trackers.length) {
    return (<h1>No data</h1>);
  }

  const trackersList = props.trackers.trackers.map(tracker => (
    <Tracker key={tracker.id} {...tracker} />
  ));

  return (
    <div className="section">
      <h2 className="is-size-2">Trackers List</h2>
      <br />
      <div className="columns is-multiline">{trackersList}</div>
    </div>
  );
};

export default TrackersList;
