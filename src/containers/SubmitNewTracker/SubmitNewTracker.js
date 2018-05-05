import { connect } from 'react-redux';
import AddNewTracker from '../../components/AddNewTracker/AddNewTracker';
import addTracker from '../../actions/addTracker';

const mapStateToProps = state => ({
  submiting: state.trackers.newTracker.sending,
  newTracker: state.trackers.newTracker.tracker,
});

const mapDispatchToProps = dispatch => ({
  addTracker: tracker => dispatch(addTracker(tracker)),
});

const SubmitNewTracker = connect(mapStateToProps, mapDispatchToProps)(AddNewTracker);

export default SubmitNewTracker;
