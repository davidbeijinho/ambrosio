import PropTypes from 'prop-types';
import React from 'react';
import ButtonGeneric from './ButtonGeneric';

const ButtonDanger = props => (
  <ButtonGeneric className="is-danger" {...props} />
);

ButtonDanger.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

ButtonDanger.defaultProps = {
  disabled: false,
};

export default ButtonDanger;
