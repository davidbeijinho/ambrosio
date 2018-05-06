import PropTypes from 'prop-types';
import React from 'react';
import { propTypes, defaultProps } from '../../propTypes/button';

const ButtonGeneric = props => (
  <button className={`button ${props.className}`} disabled={props.disabled} onClick={props.handleClick}>{props.children}</button>
);

ButtonGeneric.propTypes = {
  ...propTypes,
  className: PropTypes.string,
};

ButtonGeneric.defaultProps = {
  ...defaultProps,
  className: '',
};

export default ButtonGeneric;
