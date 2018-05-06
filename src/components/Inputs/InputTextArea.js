import PropTypes from 'prop-types';
import React from 'react';
import { validateInputClass } from '../../lib/utils.fields';
import { propTypes, defaultProps } from '../../propTypes/input';

const InputTextArea = props => React.createElement('textarea', {
  required: props.required,
  className: `textarea ${validateInputClass(props.valid, props.validate)}`,
  id: props.id,
  name: props.name,
  onChange: props.onChange,
  disabled: props.disabled,
  value: props.value,

  placeholder: props.placeHolder,
});

InputTextArea.propTypes = {
  ...propTypes,
  placeHolder: PropTypes.string,
};

InputTextArea.defaultProps = {
  ...defaultProps,
  placeHolder: '',
};

export default InputTextArea;
