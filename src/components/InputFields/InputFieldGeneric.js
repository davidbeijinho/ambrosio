import PropTypes from 'prop-types';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { validateFieldIcon } from '../../lib/utils.fields';

const InputFieldGeneric = props => (
  <div className="field">
    <label className="label" htmlFor="name">{props.label}
      <div className="control has-icons-right">
        {props.children}
        { props.validate ?
          <span className="icon is-small is-right">
            <FontAwesomeIcon icon={validateFieldIcon(props.valid, props.validate)} />
          </span>
        : ''
        }
      </div>
    </label>
    { props.help ? <p className="help">{props.help}</p> : '' }
  </div>
);

InputFieldGeneric.propTypes = {
  help: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.element.isRequired,
  valid: PropTypes.bool,
  validate: PropTypes.bool,
};

InputFieldGeneric.defaultProps = {
  help: '',
  label: '',
  valid: true,
  validate: false,
};

export default InputFieldGeneric;
