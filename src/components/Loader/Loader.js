import PropTypes from 'prop-types';
import React from 'react';
import './Loader.scss';

const Loader = ({ visible }) => (
  <div className={`lds-loader ${visible ? '' : 'is-invisible'}`}>
    <div />
    <div />
    <div />
  </div>
);
Loader.propTypes = {
  visible: PropTypes.bool,
};

Loader.defaultProps = {
  visible: false,
};


export default Loader;
