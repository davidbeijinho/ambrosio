import React from 'react';
import InputFieldGeneric from './InputFieldGeneric';
import InputTextArea from '../Inputs/InputTextArea';
import * as field from '../../propTypes/field';
import * as inputFiled from '../../propTypes/inputFiled';

const InputFieldTextArea = props => (
  <InputFieldGeneric help={props.help} label={props.label} >
    <InputTextArea
      disabled={props.disabled}
      value={props.value}
      onChange={props.onChange}
      placeHolder={props.placeHolder}
      id={props.id}
      name={props.name}
    />
  </InputFieldGeneric>
);

InputFieldTextArea.propTypes = {
  ...field.propTypes,
  ...inputFiled.propTypes,
};
InputFieldTextArea.defaultProps = {
  ...field.defaultProps,
  ...inputFiled.defaultProps,
};

export default InputFieldTextArea;

