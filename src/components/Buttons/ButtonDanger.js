import PropTypes from 'prop-types';
import React from 'react';
import ButtonGeneric from './ButtonGeneric';

const ButtonDanger = props => (
  <ButtonGeneric className="is-danger" {...props} >{props.children}</ButtonGeneric>
);

ButtonDanger.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  disabled: PropTypes.bool,
};

ButtonDanger.defaultProps = {
  disabled: false,
};

export default ButtonDanger;
