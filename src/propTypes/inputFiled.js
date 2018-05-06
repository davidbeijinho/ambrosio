import PropTypes from 'prop-types';

export const propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export const defaultProps = {
  disabled: false,
  value: '',
  placeHolder: '',
  onChange: () => {},
};
