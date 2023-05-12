import React from "react";
import Card from "../UI/Card";
import './InputList.css'
const InputList = (props) => {
  return (
    <Card>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name}({user.age} years old)
        </li>
      ))}
    </Card>
  );
};
export default InputList;
