import React from 'react';
import InputFieldGeneric from './InputFieldGeneric';
import InputText from '../Inputs/InputText';
import * as field from '../../propTypes/field';
import * as inputFiled from '../../propTypes/inputFiled';

const InputFieldText = props => (
  <InputFieldGeneric help={props.help} label={props.label} >
    <InputText
      disabled={props.disabled}
      value={props.value}
      onChange={props.onChange}
      placeHolder={props.placeHolder}
      id={props.id}
      name={props.name}
      type="text"
      className="input"
    />
  </InputFieldGeneric>
);

InputFieldText.propTypes = {
  ...field.propTypes,
  ...inputFiled.propTypes,
};
InputFieldText.defaultProps = {
  ...field.defaultProps,
  ...inputFiled.defaultProps,
};

export default InputFieldText;
