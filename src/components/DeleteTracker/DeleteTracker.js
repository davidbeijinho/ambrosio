import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import trackersProp from '../../propTypes/trackers';
import deleteTrackerAction from '../../actions/deleteTracker';
import ButtonDanger from '../Buttons/ButtonDanger';
import ButtonGeneric from '../Buttons/ButtonGeneric';

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
        <ButtonDanger text="Delete" handleClick={() => this.toggleModal()} />
        <div className={`modal  ${this.state.open ? 'is-active' : ''}`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Delete Tracker</p>
              <button className="delete" aria-label="close" onClick={() => this.toggleModal()} />
            </header>
            <section className="modal-card-body">
              <p>Do you want to delete the tracker {this.props.tracker.name}</p>
            </section>
            <footer className="modal-card-foot">
              <ButtonDanger text="Delete" handleClick={() => this.confirmDelete()} />
              <ButtonGeneric text="Cancel" handleClick={() => this.toggleModal()} />
            </footer>
          </div>
        </div>
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
