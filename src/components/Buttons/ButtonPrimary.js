import PropTypes from 'prop-types';
import React from 'react';
import ButtonGeneric from './ButtonGeneric';

const ButtonPrimary = props => (
  <ButtonGeneric className="is-primary" {...props} />
);

ButtonPrimary.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

ButtonPrimary.defaultProps = {
  disabled: false,
};

export default ButtonPrimary;
