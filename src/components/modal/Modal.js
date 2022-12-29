import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/slices/modalSlice";
import { CgCloseR } from 'react-icons/cg'; 

const ModalComponent = () => {

  const {show,title,body:Body} = useSelector(state => state.modal);

  const ḍispatch = useDispatch();

  console.log(Body)

  const [showLoading, setLoading] = useState(false);

  const handleClose = () => {
    ḍispatch(modalActions.closeModal());
  }

  const stopLoading = () => {
    setLoading(false);
  }

  const startLoading = () => {
    setLoading(true);
  }

  return (
    
      <Modal
        show={show}
        onHide={handleClose}
        backdrop={showLoading?'static':true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdropClassName="custom-modal-backdrop"
      >
        <Modal.Header closeButton={!showLoading}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {React.cloneElement(Body,{showLoading,startLoading,stopLoading}) }
        </Modal.Body>
      </Modal>
  );
}

export default ModalComponent;