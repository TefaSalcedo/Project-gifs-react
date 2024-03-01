import React from "react";
import { useState } from "react";

export const AddFirst = ({ setFuncion }) => {
  const [inputValue, setInputValue] = useState("Twilight");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    // insertar :3
    if (inputValue.trim().length <= 1) return;

    setFuncion((fish) => [...fish, inputValue]);
    setInputValue("");
  };
  return (
    // aqui tenemos un event que solo se usa aqui porque lo
    // se puede dejar más sencillo
    // <form onSubmit={(event) => onSubmit(event)}>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
