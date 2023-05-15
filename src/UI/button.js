import React from "react";
import "./button.css";

const Button = (props) => {
  const buttonStyle = 'btn ' + props.className;
  return (
    <button className={buttonStyle} type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
