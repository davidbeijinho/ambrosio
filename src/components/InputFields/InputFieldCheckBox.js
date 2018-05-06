import PropTypes from 'prop-types';
import React from 'react';
import InputCheckBox from '../Inputs/InputCheckBox';
import * as field from '../../propTypes/field';
import * as inputFiled from '../../propTypes/inputFiled';

const InputFieldCheckBox = props => (
  <div className="field">
    <span className="label">{props.label}</span>
    <div className="control" >
      <label className="radio" htmlFor={props.name}>
        <InputCheckBox
          type="checkbox"
          className="radio"
          name={props.name}
          id={props.id}
          checked={props.checked}
          onChange={props.onChange}
          disabled={props.disabled}
          value={props.value}
        />
        {props.placeHolder}
      </label>
    </div>
    <p className="help">{props.help}</p>
  </div>
);

InputFieldCheckBox.propTypes = {
  ...field.propTypes,
  ...inputFiled.propTypes,
  checked: PropTypes.bool,
};
InputFieldCheckBox.defaultProps = {
  ...field.defaultProps,
  ...inputFiled.defaultProps,
  checked: false,
};

export default InputFieldCheckBox;
