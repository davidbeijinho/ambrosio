import PropTypes from 'prop-types';
import React from 'react';
import { validateInputClass } from '../../lib/utils.fields';
import { propTypes, defaultProps } from '../../propTypes/input';

const InputCheckBox = props => React.createElement('input', {
  required: props.required,
  className: `radio ${validateInputClass(props.valid, props.validate)}`,
  id: props.id,
  name: props.name,
  onChange: props.onChange,
  disabled: props.disabled,
  value: props.value,

  type: 'checkbox',
  checked: props.checked,
});

InputCheckBox.propTypes = {
  ...propTypes,
  checked: PropTypes.bool,
};

InputCheckBox.defaultProps = {
  ...defaultProps,
  checked: false,
};

export default InputCheckBox;
