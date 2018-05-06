import PropTypes from 'prop-types';
import React from 'react';

const InputGeneric = ({
  disabled, value, onChange, placeHolder, id, name, type,
}) => (
  <input
    required
    className="input is-success"
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
};

InputGeneric.defaultProps = {
  placeHolder: '',
  disabled: false,
  value: '',
  onChange: () => {},
};

export default InputGeneric;
