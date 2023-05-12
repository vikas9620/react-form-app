import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./FormInput.css";
import Button from "../UI/button";
import "./FormInput.css";
import ErrorModal from "../UI/ErrorModal";
const FormInput = (props) => {
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

    props.onAddUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };
const errorHandler = () => { 
  setError(null)}
  return (
    <div>
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
          <Button type="submit" className="btn">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default FormInput;