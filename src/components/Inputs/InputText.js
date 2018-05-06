import PropTypes from 'prop-types';
import React from 'react';
import { validateInputClass } from '../../lib/utils.fields';
import { propTypes, defaultProps } from '../../propTypes/input';

const InputText = props => React.createElement('input', {
  required: props.required,
  className: `input ${validateInputClass(props.valid, props.validate)}`,
  id: props.id,
  name: props.name,
  onChange: props.onChange,
  disabled: props.disabled,
  value: props.value,

  type: 'text',
  placeholder: props.placeHolder,
});

InputText.propTypes = {
  ...propTypes,
  placeHolder: PropTypes.string,
};

InputText.defaultProps = {
  ...defaultProps,
  placeHolder: '',
};

export default InputText;
