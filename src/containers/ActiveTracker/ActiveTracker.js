import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import TrackerInfo from '../../components/TrackerInfo/TrackerInfo';
import trackingsProp from '../../propTypes/trackings';
import trackersProp from '../../propTypes/trackers';

import selectTracker from '../../actions/selectTracker';
import loadTrackings from '../../actions/loadTrackings';

class ActiveTracker extends React.Component {
  componentDidMount() {
    this.props.loadTrackings(this.props.match.params.id);
    this.props.selectTracker(this.props.match.params.id);
  }

  render() {
    if (this.props.error) {
      return <div>Error! {this.props.error.message}</div>;
    }
    if (this.props.loading) {
      return <div>Loading...</div>;
    }

    return <TrackerInfo trackings={this.props.trackings} tracker={this.props.tracker} />;
  }
}

ActiveTracker.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  trackings: PropTypes.oneOfType([
    PropTypes.arrayOf(trackingsProp),
    PropTypes.array,
  ]).isRequired,
  loadTrackings: PropTypes.func.isRequired,
  selectTracker: PropTypes.func.isRequired,
  tracker: PropTypes.oneOfType([
    PropTypes.shape(trackersProp),
    PropTypes.shape(),
  ]).isRequired,
};

const mapDispatchToProps = dispatch => ({
  loadTrackings: id => dispatch(loadTrackings(id)),
  selectTracker: id => dispatch(selectTracker(id)),
});

const mapStateToProps = state => ({
  trackings: state.trackers.activeTrackings.trackings,
  tracker: state.trackers.activeTracker.tracker,
  loading: state.trackers.activeTracker.loading,
  error: state.trackers.activeTracker.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ActiveTracker));
