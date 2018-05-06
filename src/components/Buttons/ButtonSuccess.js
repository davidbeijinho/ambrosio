import PropTypes from 'prop-types';
import React from 'react';
import ButtonGeneric from './ButtonGeneric';

const ButtonSuccess = props => (
  <ButtonGeneric className="is-success" {...props} >{props.children}</ButtonGeneric>
);

ButtonSuccess.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  disabled: PropTypes.bool,
};

ButtonSuccess.defaultProps = {
  disabled: false,
};

export default ButtonSuccess;
