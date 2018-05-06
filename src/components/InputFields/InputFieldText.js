import PropTypes from 'prop-types';
import React from 'react';
import InputFieldGeneric from './InputFieldGeneric';
import InputGeneric from './InputGeneric';

const InputFieldText = ({
  help, label, disabled, value, onChange, placeHolder, id, name,
}) => (
  <InputFieldGeneric help={help} label={label} >
    <InputGeneric
      disabled={disabled}
      value={value}
      onChange={onChange}
      placeHolder={placeHolder}
      id={id}
      name={name}
      type="text"
      className="input"
    />
  </InputFieldGeneric>
);

InputFieldText.propTypes = {
  help: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputFieldText.defaultProps = {
  help: '',
  label: '',
  placeHolder: '',
  disabled: false,
  value: '',
  onChange: () => {},
};

export default InputFieldText;
