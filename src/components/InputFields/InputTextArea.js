import PropTypes from 'prop-types';
import React from 'react';

const InputTextArea = ({
  disabled, value, onChange, placeHolder, id, name,
}) => (
  <textarea
    required
    className="textarea is-success"
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
};

InputTextArea.defaultProps = {
  placeHolder: '',
  disabled: false,
  value: '',
  onChange: () => {},
};

export default InputTextArea;
