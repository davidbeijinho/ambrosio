import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import TrackerInfo from '../../components/TrackerInfo/TrackerInfo';
import TrackingList from '../../components/TrackingsList/TrackingsList';
import trackingsProp from '../../propTypes/trackings';
import trackersProp from '../../propTypes/trackers';

import loadTracker from '../../actions/loadTracker';
import loadTrackings from '../../actions/loadTrackings';
import addTracking from '../../actions/addTracking';

class ActiveTracker extends React.Component {
  componentDidMount() {
    this.props.loadTrackings(this.props.match.params.id);
    this.props.loadTracker(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <TrackerInfo
          loading={this.props.loadingTracker}
          error={this.props.errorTracker}
          tracker={this.props.tracker}
          addTracking={this.props.addTracking}
        />
        <TrackingList
          trackings={this.props.trackings}
          error={this.props.errorTrackings}
          loading={this.props.loadingTrackings}
        />
      </div>
    );
  }
}

ActiveTracker.propTypes = {
  addTracking: PropTypes.func.isRequired,
  loadingTracker: PropTypes.bool.isRequired,
  loadingTrackings: PropTypes.bool.isRequired,
  errorTracker: PropTypes.bool.isRequired,
  errorTrackings: PropTypes.bool.isRequired,
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
  loadTracker: PropTypes.func.isRequired,
  tracker: PropTypes.oneOfType([
    PropTypes.shape(trackersProp),
    PropTypes.shape(),
  ]).isRequired,
};

const mapDispatchToProps = dispatch => ({
  loadTrackings: id => dispatch(loadTrackings(id)),
  loadTracker: id => dispatch(loadTracker(id)),
  addTracking: (id, location) => dispatch(addTracking(id, location)),
});

const mapStateToProps = state => ({
  tracker: state.trackers.activeTracker.tracker,
  trackings: state.trackers.activeTrackings.trackings,
  loadingTracker: state.trackers.activeTracker.loading,
  loadingTrackings: state.trackers.activeTrackings.loading,
  loading: state.trackers.activeTracker.loading,
  errorTracker: state.trackers.activeTracker.error,
  errorTrackings: state.trackers.activeTrackings.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ActiveTracker));
