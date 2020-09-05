import React, { useState } from "react";
//import Card from "./components/card";
import Select from "./components/select";
import TextInput from "./components/text-input";
import Button from "./components/button";

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleOnTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setText(e.target.value);
  };

  const handleOnError = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
    setError(e.currentTarget.validationMessage);
  };

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
      <hr />
      <Select native onChange={handleOnChange} title="Select One">
        <option value="">Select One</option>
        <option value="1">1. Hello</option>
        <option value="2">2. World</option>
        <option value="3">3. Dev</option>
      </Select>
      <div>{text}</div>
      <hr />
      <TextInput
        label="Enter your phone"
        prefix="+65"
        numberOnly
        value={text}
        onChange={handleOnTextChange}
        maxLength={10}
        required
      />
      <br />
      <div style={{ maxWidth: "200px" }}>
        <Button shape="sharp" color="black">
          Click Me!
        </Button>
      </div>
    </div>
  );
}

export default App;
