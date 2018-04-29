import { connect } from 'react-redux';
import AddNewTracker from '../../components/AddNewTracker/AddNewTracker';
import { addTracker } from '../../actions';

const mapStateToProps = state => ({
  submiting: state.trackers.submitingNewTracker,
});

const mapDispatchToProps = dispatch => ({
  addTracker: id => dispatch(addTracker(id)),
});

const SubmitNewTracker = connect(mapStateToProps, mapDispatchToProps)(AddNewTracker);

export default SubmitNewTracker;
