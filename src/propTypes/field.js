import PropTypes from 'prop-types';

export const propTypes = {
  help: PropTypes.string,
  label: PropTypes.string,
  valid: PropTypes.bool,
  validate: PropTypes.bool,
};

export const defaultProps = {
  help: '',
  label: '',
  valid: true,
  validate: false,
};
