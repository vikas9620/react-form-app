import React from "react";
import Card from "../UI/Card";
import "./InputList.css";
import Wrapper from "../Helper/Wrapper";

const InputList = (props) => {
  return (
    <Wrapper>
      {props.users.map((user) => (
        <Card className="list" key={user.id}>
          {user.name}({user.age} years old) {user.CollegeNameRef}
        </Card>
      ))}
    </Wrapper>
  );
};
export default InputList;
