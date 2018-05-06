import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Router from '../../components/Router/Router';
import loadTrackers from '../../actions/loadTrackers';

class App extends React.Component {
  componentDidMount() {
    this.props.loadTrackers();
  }

  render() {
    return (
      <Router />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadTrackers: () => dispatch(loadTrackers()),
});

App.propTypes = {
  loadTrackers: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
