import React from 'react';
import ButtonGeneric from './ButtonGeneric';
import { propTypes, defaultProps } from '../../propTypes/button';

const ButtonPrimary = props => (
  <ButtonGeneric className="is-primary" {...props} >{props.children}</ButtonGeneric>
);

ButtonPrimary.propTypes = propTypes;
ButtonPrimary.defaultProps = defaultProps;

export default ButtonPrimary;
