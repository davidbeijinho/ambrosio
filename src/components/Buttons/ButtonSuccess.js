import React from 'react';
import ButtonGeneric from './ButtonGeneric';
import { propTypes, defaultProps } from '../../propTypes/button';

const ButtonSuccess = props => (
  <ButtonGeneric className="is-success" {...props} >{props.children}</ButtonGeneric>
);

ButtonSuccess.propTypes = propTypes;
ButtonSuccess.defaultProps = defaultProps;

export default ButtonSuccess;
