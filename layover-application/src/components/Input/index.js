import React from "react";

const Input = ({
  labelText,
  placeholderText,
  onChange,
  text,
  type,
  formFieldKey,
}) => (
  <div className="inputComponent" data-testid="Input">
    <label>{labelText}</label>
    <input
      value={text}
      className="inputField"
      type={type}
      placeholder={placeholderText}
      onChange={(event) => {
        onChange(formFieldKey, event.target.value);
      }}
    ></input>
  </div>
);

export default Input;
