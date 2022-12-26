import React from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
 

const ModalComponent = ({
  show,
  handleClose,
  title,
  body,
  footer,
}) => {


  return createPortal(
    (
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdropClassName="custom-modal-backdrop"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
          <button onClick={handleClose}>
            <LordIcon icon="close" />
          </button>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>{footer}</Modal.Footer>
      </Modal>
    ),document.getElementById('modal'));
};

export default ModalComponent;