import PropTypes from 'prop-types';
import React from 'react';
import ButtonGeneric from './ButtonGeneric';

const ButtonPrimary = props => (
  <ButtonGeneric className="is-primary" {...props} >{props.children}</ButtonGeneric>
);

ButtonPrimary.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  disabled: PropTypes.bool,
};

ButtonPrimary.defaultProps = {
  disabled: false,
};

export default ButtonPrimary;
