import PropTypes from 'prop-types';
import React from 'react';

const ButtonGeneric = ({
  handleClick, disabled, className, children,
}) => (
  <button className={`button ${className}`} disabled={disabled} onClick={handleClick}>{children}</button>
);

ButtonGeneric.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

ButtonGeneric.defaultProps = {
  disabled: false,
  className: '',
};

export default ButtonGeneric;
