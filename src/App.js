import FormInput from "./Form.js/FormInput";
import "./App.css";
import InputList from "./Form.js/InputList";
import React, { useState } from "react";

function App() {
  const [newUser, setNewUser] = useState([]);
  const addUser = (NewUserName, NewUserAge) => {
    setNewUser((prevUser) => {
      return [
        ...prevUser,
        { name: NewUserName, age: NewUserAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <FormInput onAddUser={addUser} />
      <InputList users={newUser} />
    </div>
  );
}

export default App;
