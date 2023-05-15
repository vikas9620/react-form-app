import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./FormInput.css";
import Button from "../UI/button";
import "./FormInput.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";
const FormInput = (props) => {
  const CollegeName = useRef();
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState("");
  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "please enter a valid user name and age (non-empty values)",
      });

      return;
    }
    if (userAge.toString() < 1) {
      setError({
        title: "Invalid age",
        message: "please enter a valid age (>0)",
      });
      return;
    }
const CollegeNameRef=CollegeName.current.value;
    props.onAddUser(userName, userAge, CollegeNameRef);
    setUserName("");
    setUserAge("");
    CollegeName.current.value='';
  };
const errorHandler = () => { 
  setError(null)}
  return (
    <Wrapper>
     {error &&<ErrorModal
        title={error.title}
        message={error.message}
        click={errorHandler}
      />}
      <Card className={classes.input}>
        <form className="form" onSubmit={FormSubmitHandler}>
          <label>Name</label>
          <input
            id="username"
            type="text"
            placeholder="your name"
            onChange={nameChangeHandler}
            value={userName}
          ></input>
          <label>Age</label>
          <input
            id="age"
            type="number"
            placeholder="your age"
            onChange={ageChangeHandler}
            value={userAge}
          ></input>
          <label>College Name</label>
          <input
            id="collegeName"
            type="text"
            placeholder="college name"
            ref={CollegeName}
          ></input>
          <Button type="submit" className="btn">
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default FormInput;
