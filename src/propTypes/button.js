import PropTypes from 'prop-types';

export const propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  disabled: PropTypes.bool,
};

export const defaultProps = {
  disabled: false,
};
