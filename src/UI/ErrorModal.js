import React from "react";

import Button from "./button";
import './ErrorModal.css';
const ErrorModal = (props) => {
  return (
    <div className="error-modal" onClick={props.click}>
    <div className="error-modal-content">
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <div className="error-modal-buttons">
       
        <Button onClick={props.click}>OK</Button>
      </div>
    </div>
  </div>
  );
};
export default ErrorModal;