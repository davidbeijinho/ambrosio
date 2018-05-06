import PropTypes from 'prop-types';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const InputFieldGeneric = props => (
  <div className="field">
    <label className="label" htmlFor="name">{props.label}
      <div className="control has-icons-right">
        {props.children}
        <span className="icon is-small is-right">
          <FontAwesomeIcon icon="check" />
        </span>
      </div>
    </label>
    { props.help ? <p className="help">{props.help}</p> : '' }
  </div>
);

InputFieldGeneric.propTypes = {
  help: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.element.isRequired,
};

InputFieldGeneric.defaultProps = {
  help: '',
  label: '',
};

export default InputFieldGeneric;
