import React from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/slices/modalSlice";
import { CgCloseR } from 'react-icons/cg'; 

const ModalComponent = () => {

  const {show,title,body} = useSelector(state => state.modal);

  const ḍispatch = useDispatch();

  const handleClose = () => {
    ḍispatch(modalActions.closeModal());
  }

  return (
    
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
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
      </Modal>
  );
}

export default ModalComponent;