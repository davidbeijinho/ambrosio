import { connect } from 'react-redux';
import TrackersList from './../components/TrackersList';

const mapStateToProps = state => ({
  trackers: state.trackers,
});

const ActiveTrackersList = connect(mapStateToProps)(TrackersList);

export default ActiveTrackersList;
