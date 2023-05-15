import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";
import "./ErrorModal.css";

const Modal = (props) => {
  return (<div className="error-modal" onClick={props.click}>
  <div className="error-modal-content">
    <h2>{props.title}</h2>
    <p>{props.message}</p>
    <div className="error-modal-buttons">
      <Button onClick={props.click}>OK</Button>
    </div>
  </div>
</div>)
}


const ErrorModal = (props) => {
  return (
    <React.Fragment>
    {ReactDOM.createPortal(<Modal click={props.click} title={props.title} message={props.message} />, document.getElementById("modal-root"))}
    </React.Fragment>
  );
};
export default ErrorModal;
