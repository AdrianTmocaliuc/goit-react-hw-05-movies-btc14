import React, { useState } from "react";

function FormInput({ onSubmit }) {
  const [inputText, setInputText] = useState("");

  const onChangeInput = ({ target: { value } }) => {
    setInputText(value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!inputText.trim()) {
      return alert("Enter movie name");
    }
    // console.log("inputText", inputText);
    onSubmit(inputText);
    setInputText("");
  };

  return (
    <div>
      <form action="" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Enter name"
          value={inputText}
          onChange={onChangeInput}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default FormInput;
