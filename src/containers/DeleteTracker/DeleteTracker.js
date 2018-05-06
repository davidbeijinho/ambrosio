import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import trackersProp from '../../propTypes/trackers';
import deleteTrackerAction from '../../actions/deleteTracker';
import Modal from '../../components/Modal/Modal';
import ButtonDanger from '../../components/Buttons/ButtonDanger';

class DeleteTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleMenu = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ open: !this.state.open });
  }

  confirmDelete() {
    this.props.deleteTracker(this.props.tracker.id);
    this.props.history.push('/trackers/list');
  }
  render() {
    return (
      <div>
        <ButtonDanger text="Delete" handleClick={() => this.toggleModal()} >Delete</ButtonDanger>
        <Modal
          open={this.state.open}
          handleConfirm={() => this.confirmDelete()}
          handleCancel={() => this.toggleModal()}
          handleClose={() => this.toggleModal()}
          head="Delete Tracker"
          confirmContent="Delete"
          cancelContent="Cancel"
        >{`Do you want to delete the tracker ${this.props.tracker.name}`}
        </Modal>
      </div>
    );
  }
}

DeleteTracker.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  deleteTracker: PropTypes.func.isRequired,
  tracker: PropTypes.oneOfType([
    PropTypes.shape(trackersProp),
    PropTypes.shape(),
  ]).isRequired,
};

const mapDispatchToProps = dispatch => ({
  deleteTracker: id => dispatch(deleteTrackerAction(id)),
});

const mapStateToProps = state => ({
  tracker: state.trackers.activeTracker.tracker,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DeleteTracker));
