import PropTypes from 'prop-types';
import React from 'react';
import ButtonGeneric from './ButtonGeneric';

const ButtonSuccess = props => (
  <ButtonGeneric className="is-success" {...props} />
);

ButtonSuccess.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

ButtonSuccess.defaultProps = {
  disabled: false,
};

export default ButtonSuccess;
