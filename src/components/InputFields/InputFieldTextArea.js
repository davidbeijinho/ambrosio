import PropTypes from 'prop-types';
import React from 'react';
import InputFieldGeneric from './InputFieldGeneric';
import InputTextArea from './InputTextArea';

const InputFieldTextArea = ({
  help, label, disabled, value, onChange, placeHolder, id, name,
}) => (
  <InputFieldGeneric help={help} label={label} >
    <InputTextArea
      disabled={disabled}
      value={value}
      onChange={onChange}
      placeHolder={placeHolder}
      id={id}
      name={name}
    />
  </InputFieldGeneric>
);

InputFieldTextArea.propTypes = {
  help: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputFieldTextArea.defaultProps = {
  help: '',
  label: '',
  placeHolder: '',
  disabled: false,
  value: '',
  onChange: () => {},
};

export default InputFieldTextArea;

