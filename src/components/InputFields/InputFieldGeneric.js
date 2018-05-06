import PropTypes from 'prop-types';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { validateFieldIcon } from '../../lib/utils.fields';
import { propTypes, defaultProps } from '../../propTypes/field';

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
  ...propTypes,
  children: PropTypes.element.isRequired,
};
InputFieldGeneric.defaultProps = defaultProps;

export default InputFieldGeneric;
