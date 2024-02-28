import { useState } from "react";

export const Vampires = () => {
  const [first, setfirst] = useState([`Twilight`, `Vampire Diary's`]);

  console.log(first);

  const botonClick=()=>{
    // OPCIÓN 1
    const copiafirst=first;
    copiafirst.push("Originals")
    setfirst(copiafirst);

    // OPCIÓN 2
    setfirst([...first,`My boyfriend is a Vampire`]);

    // OPTION 3
    setfirst(fish => [...fish,`UnderWorld`]);
  }

  return (
    <>
      <h1>Vampires App </h1>
      <button onClick={botonClick}>Agregar</button>
      <ol>
        {first.map((elemento,position) => {
            return <li key={`${elemento}-${position}`}> {elemento}</li>;})}
      </ol>
    </>
  );
};