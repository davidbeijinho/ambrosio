import PropTypes from 'prop-types';
import React from 'react';
import { propTypes, defaultProps } from '../../propTypes/button';

const ButtonGeneric = ({
  handleClick, disabled, className, children,
}) => (
  <button className={`button ${className}`} disabled={disabled} onClick={handleClick}>{children}</button>
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
