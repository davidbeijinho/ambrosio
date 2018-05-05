import { connect } from 'react-redux';
import TrackersList from '../../components/TrackersList/TrackersList';
import addTracking from '../../actions/addTracking';

const mapStateToProps = state => ({
  trackers: state.trackers,
});

const mapDispatchToProps = dispatch => ({
  addTracking: id => dispatch(addTracking(id)),
});

const ActiveTrackersList = connect(mapStateToProps, mapDispatchToProps)(TrackersList);

export default ActiveTrackersList;
