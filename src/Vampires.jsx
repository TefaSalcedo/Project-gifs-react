import { useState } from "react";
import { AddFirst } from "./components/AddFirst";
import { GifGrid } from "./components/Gifgrid";

export const Vampires = () => {
  const [first, setfirst] = useState([`Twilight`, `The Vampire Diaries`]);

 
  // Agregar elemento a la lista 
  const onAddFirst=(newFirst)=>{

    // Evitar que el elemento se añada repetido
    if (first.includes(newFirst)) return;
    // // OPCIÓaN 1
    // const copiafirst=first;
    // copiafirst.push("Originals")
    // setfirst(copiafirst);

    // OPCIÓN 2 recomendado
    setfirst([...first,newFirst]);

    // OPTION 3
    // setfirst(fish => [...fish,newFirst]);
    console.log(newFirst);
  }

  return (
    <>
      <h1>Vampires App </h1>
      <AddFirst 
        onNewfirst={(event)=>onAddFirst(event)}
      />
      {first.map((elemento,position) =>(
        <GifGrid 
          key={`${elemento}`} 
          category={elemento} />
        ))
      } 
    </>
  );
};