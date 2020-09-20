import React, { useState } from "react";
import Select from "./components/select";
import TextInput from "./components/text-input";
import Button from "./components/button";
import { TranslateProvider, Translatable } from "./components/translator";

import en from "./assets/localization/en.json";
import zh_cn from "./assets/localization/zh-cn.json";
import DatePicker from "./components/date-picker";

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const languageSet = {
    English: en,
    Chinese: zh_cn,
  };

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
        onError={handleOnError}
        maxLength={10}
        required
      />
      <br />
      <div>{error}</div>
      <hr />
      <div style={{ maxWidth: "200px" }}>
        <Button shape="sharp" color="black">
          Click Me!
        </Button>
      </div>
      <br />
      <hr />
      <TranslateProvider src={languageSet}>
        <Translatable text="hello" language="English" />
        <br />
        <Translatable text="hello" language="Chinese" />
      </TranslateProvider>
      <br />
      <hr />
      <form
        style={{ maxWidth: "340px" }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <DatePicker native />
        <br/>
        <br/>
        <Button type="submit" shape="sharp" color="black">
          Submit date
        </Button>
      </form>
    </div>
  );
}

export default App;
