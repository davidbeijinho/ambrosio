import PropTypes from 'prop-types';
import React from 'react';

const ButtonGeneric = ({
  handleClick, text, disabled, className,
}) => (
  <button className={`button ${className}`} disabled={disabled} onClick={handleClick}>{text}</button>
);

ButtonGeneric.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

ButtonGeneric.defaultProps = {
  disabled: false,
  className: '',
};

export default ButtonGeneric;
