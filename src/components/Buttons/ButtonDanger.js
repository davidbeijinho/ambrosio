import React from 'react';
import ButtonGeneric from './ButtonGeneric';
import { propTypes, defaultProps } from '../../propTypes/button';

const ButtonDanger = props => (
  <ButtonGeneric className="is-danger" {...props} >{props.children}</ButtonGeneric>
);

ButtonDanger.propTypes = propTypes;
ButtonDanger.defaultProps = defaultProps;

export default ButtonDanger;
