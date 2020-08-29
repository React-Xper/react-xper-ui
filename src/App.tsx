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
      <TextInput
        label="Enter your phone"
        prefix="+65"
        numberOnly
        onChange={handleOnChange}
        onError={handleOnError}
        value={text}
        maxLength={10}
        required
      />
      <hr/>
      <Card>{text}</Card>
      <Card>{error}</Card>
      <hr/>
      <Select />
    </div>
  );
}

export default App;
