import React, { useState } from "react";
import Select from "./components/select";
import TextInput from "./components/text-input";
import Button from "./components/button";
import Carousel from "./components/carousel";
import { TranslateProvider, Translatable } from "./components/translator";

import en from "./assets/localization/en.json";
import zh_cn from "./assets/localization/zh-cn.json";
import DatePicker from "./components/date-picker";
import toast, { ToastContainer } from "./components/toast";
import Slide from "./components/carousel/Slide";

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
        <Button color="black">Click Me!</Button>
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
        <br />
        <br />
        <Button type="submit" color="black">
          Submit date
        </Button>
        <br />
        <br />
        <ToastContainer />
        <Button
          type="submit"
          color="primary"
          onClick={() => {
            toast.error("🎉 Yayy!! Toast is displayed!");
          }}
        >
          Show toast error
        </Button>
        <Button
          type="submit"
          color="primary"
          onClick={() => {
            toast("🎉 Yayy!! Toast is displayed!");
          }}
        >
          Show toast normal
        </Button>
        <Button
          type="submit"
          color="primary"
          onClick={() => {
            toast.success("🎉 Yayy!! Toast is displayed!");
          }}
        >
          Show toast success
        </Button>
        <Button
          type="submit"
          color="primary"
          onClick={() => {
            toast.info("🎉 Yayy!! Toast is displayed!");
          }}
        >
          Show toast info
        </Button>
        <Button
          type="submit"
          color="primary"
          onClick={() => {
            toast.warn("🎉 Yayy!! Toast is displayed!");
          }}
        >
          Show toast warn
        </Button>
      </form>
      <Carousel
        style={{ marginTop: "32px" }}
        slides={[
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Hi
          </div>,
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Hi Hi
          </div>,
        ]}
      />
    </div>
  );
}

export default App;
