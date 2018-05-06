import PropTypes from 'prop-types';

export const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  valid: PropTypes.bool,
  validate: PropTypes.bool,
  required: PropTypes.bool,
};

export const defaultProps = {
  disabled: false,
  value: '',
  onChange: () => {},
  valid: true,
  validate: false,
  required: false,
};
