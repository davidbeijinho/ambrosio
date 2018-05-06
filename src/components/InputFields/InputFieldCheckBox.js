import PropTypes from 'prop-types';
import React from 'react';
import InputFieldGeneric from './InputFieldGeneric';
import InputGeneric from './InputGeneric';

const InputFieldCheckBox = ({
  help, label, disabled, value, onChange, placeHolder, id, name, checked,
}) => (
  <div className="field">
    <span className="label">{label}</span>
    <div className="control" >
      <label className="radio" htmlFor={name}>
        <input
          type="checkbox"
          className="radio"
          name={name}
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          value={value}
        />
        {placeHolder}
      </label>
    </div>
    <p className="help">{help}</p>
  </div>

  // <InputFieldGeneric help={help} label={label} >
  //   <InputGeneric
  //     disabled={disabled}
  //     value={value}
  //     onChange={onChange}
  //     placeHolder={placeHolder}
  //     id={id}
  //     name={name}
  //     type="checkbox"
  //     className="radio"
  //   />
  // </InputFieldGeneric>
);

InputFieldCheckBox.propTypes = {
  help: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputFieldCheckBox.defaultProps = {
  help: '',
  label: '',
  placeHolder: '',
  disabled: false,
  value: '',
  onChange: () => {},
  checked: false,
};

export default InputFieldCheckBox;
