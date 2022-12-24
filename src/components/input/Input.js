import React from "react";
import { Form, Row, Col } from "react-bootstrap";


export const Input = ({
  label,
  required,
  error,
  success,
  errorCond,
  touched,
  ...other
}) => {

  return (
    <Form.Group className={`input__wrapper m-3`}>
      {label && (
        <Form.Label>
          {label}
          {required && <span className="asterisk">*</span>}
        </Form.Label>
      )}
      <Form.Control
        className={`${touched ? (errorCond ? "error" : "success") : ""}`}
        {...other}
        required
      />
      {errorCond && <span className="text-danger">{error}</span>}
    </Form.Group>
  );
};
