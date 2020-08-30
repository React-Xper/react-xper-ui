import React, { useState } from "react";
//import TextInput from "./components/text-input";
//import Card from "./components/card";
import Select from "./components/select";

function App() {
  const [text, setText] = useState("");
  //const [error, setError] = useState("");
  //
  //const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //  setError("");
  //  setText(e.target.value);
  //};
  //
  //const handleOnError = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
  //  setError(e.currentTarget.validationMessage);
  //};
  //
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Component Tests</h1>
      <Select onChange={handleOnChange} title="Select One">
        <option value="">Select One</option>
        <option value="1">1. Hello</option>
        <option value="2">2. World</option>
        <option value="3">3. Dev</option>
      </Select>
      <div>{text}</div>
      <hr/>
      <Select native onChange={handleOnChange} title="Select One">
        <option value="">Select One</option>
        <option value="1">1. Hello</option>
        <option value="2">2. World</option>
        <option value="3">3. Dev</option>
      </Select>
      <div>{text}</div>
    </div>
  );
}

export default App;
