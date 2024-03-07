import React from "react";
import { useState } from "react";
// Se coloca el (onNewfirst) o el (setFirstFuntion) segun la option
export const AddFirst = ({  onNewfirst }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    // evitar que se recargue la pagina al darle enter
    event.preventDefault();
    console.log(inputValue);
    // insertar :3
    if (inputValue.trim().length <= 1) return;

    // OPTION 1 ENVIANDO UN PROPERTY y con el SET 
    // setFirstFuntion((fish) => [...fish, inputValue]);

    // OPTION 2  ESTABLECIENTO UN "EVENT"
    onNewfirst(inputValue.trim().toLowerCase());
  // ...
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
