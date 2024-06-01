import React, { useState } from "react";

const Bob: React.FC = () => {
  const [response, setResponse] = useState<string>("");

  const handleInput = (input: string) => {
    if (!input.trim()) {
      setResponse("¡Bien ser de esa manera!");
    } else if (input === input.toUpperCase() && input.trim().endsWith("?")) {
      setResponse("¡Cálmate, sé lo que estoy haciendo!");
    } else if (input === input.toUpperCase()) {
      setResponse("¡Vaya, relájate!");
    } else if (input.trim().endsWith("?")) {
      setResponse("Seguro.");
    } else {
      setResponse("Lo que sea.");
    }
  };

  return (
    <div>
      <h1>Bob el adolescente indiferente</h1>
      <input
        type="text"
        placeholder="Escribe algo a Bob..."
        onChange={(e) => handleInput(e.target.value)}
      />
      <p>{response}</p>
    </div>
  );
};

export default Bob;
