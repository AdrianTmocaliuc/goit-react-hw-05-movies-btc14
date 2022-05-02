import React, { useState, useRef } from "react";
import s from "./FormInput.module.scss";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function FormInput({ onSubmit }) {
  const [inputText, setInputText] = useState("");

  const onChangeInput = ({ target: { value } }) => {
    setInputText(value);
  };

  const location = useLocation();
  const moviesRef = useRef();

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!inputText.trim()) {
      return alert("Enter movie name");
    }
    // console.log("inputText", inputText);
    onSubmit(inputText);
    moviesRef.current = inputText;
    setInputText("");
  };

  // console.log("moviesRef", moviesRef);

  return (
    <div className={s.input}>
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

FormInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputText: PropTypes.string,
};
