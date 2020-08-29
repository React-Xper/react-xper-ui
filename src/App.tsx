import React, { useState } from "react";
import TextInput from "./components/text-input";
import Card from "./components/card";
import Select from "./components/select";

function App() {
  const [text, setText] = useState("97330256");
  const [error, setError] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setText(e.target.value);
  };

  const handleOnError = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
    setError(e.currentTarget.validationMessage);
  };

  return (
    <div>
      <h1>Component Tests</h1>
      <Select>
        <option>1. Hello</option>
        <option>2. World</option>
        <option>3. Dev</option>
      </Select>
    </div>
  );
}

export default App;
