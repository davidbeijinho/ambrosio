import PropTypes from 'prop-types';
import React from 'react';
import ButtonDanger from '../Buttons/ButtonDanger';
import ButtonGeneric from '../Buttons/ButtonGeneric';

const Modal = props => (
  <div className={`modal ${props.open ? 'is-active' : ''}`}>
    <div className="modal-background" />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{props.head}</p>
        <button className="delete" aria-label="close" onClick={props.handleClose} />
      </header>
      <section className="modal-card-body">
        {props.children}
      </section>
      <footer className="modal-card-foot">
        <ButtonDanger handleClick={props.handleConfirm} >{props.confirmContent}</ButtonDanger>
        <ButtonGeneric handleClick={props.handleCancel} >{props.cancelContent}</ButtonGeneric>
      </footer>
    </div>
  </div>
);


Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  head: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  confirmContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  cancelContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default Modal;

