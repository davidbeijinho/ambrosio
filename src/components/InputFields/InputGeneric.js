import PropTypes from 'prop-types';
import React from 'react';
import { validateInputClass } from '../../lib/utils.fields';

const InputGeneric = ({
  disabled, value, onChange, placeHolder, id, name, type, required, valid, validate,
}) => (
  <input
    required={required}
    className={`input ${validateInputClass(valid, validate)}`}
    type={type}
    placeholder={placeHolder}
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    disabled={disabled}
  />
);

InputGeneric.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  valid: PropTypes.bool,
  validate: PropTypes.bool,
};

InputGeneric.defaultProps = {
  placeHolder: '',
  disabled: false,
  required: false,
  value: '',
  onChange: () => {},
  valid: true,
  validate: false,
};

export default InputGeneric;
