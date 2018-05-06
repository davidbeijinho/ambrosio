import PropTypes from 'prop-types';
import React from 'react';
import { validateInputClass } from '../../lib/utils.fields';

const InputTextArea = ({
  disabled, value, onChange, placeHolder, id, name, valid, validate,
}) => (
  <textarea
    required
    className={`textarea ${validateInputClass(valid, validate)}`}
    placeholder={placeHolder}
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    disabled={disabled}
  />
);

InputTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  valid: PropTypes.bool,
  validate: PropTypes.bool,
};

InputTextArea.defaultProps = {
  placeHolder: '',
  disabled: false,
  value: '',
  onChange: () => {},
  valid: true,
  validate: false,
};

export default InputTextArea;
