import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import TrackerInfo from '../../components/TrackerInfo/TrackerInfo';
import { startLoadTrackings } from '../../actions';
import trackingsProp from '../../propTypes/trackings';

class ActiveTracker extends React.Component {
  componentDidMount() {
    this.props.dispatch(startLoadTrackings(this.props.match.params.id));
  }

  render() {
    if (this.props.error) {
      return <div>Error! {this.props.error.message}</div>;
    }
    if (this.props.loading || !this.props.trackings.length) {
      return <div>Loading...</div>;
    }

    return <TrackerInfo trackings={this.props.trackings} />;
  }
}

ActiveTracker.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
};

const mapStateToProps = state => ({
  trackings: state.trackers.activeTracker.data,
  loading: state.trackers.activeTracker.loading,
  error: state.trackers.activeTracker.error,
});

export default connect(mapStateToProps)(withRouter(ActiveTracker));
