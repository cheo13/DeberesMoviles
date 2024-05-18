import React, { useState } from "react";

const Example6: React.FC = () => {
  const [data, setData] = useState({ name: "Sergio U", age: 26 }); // Inferencia de tipos para data y setData
  // const [data, setData] = useState<Data>({ name: "John Doe", age: 30 }); // Inferencia de tipos para data y setData

  return (
    <div>
      <p>Nombre: {data.name}</p>
      <p>Edad: {data.age}</p>
    </div>
  );
};

export default Example6;
//Correction
// type Data = {
//   name: string;
//   age: number;
// };
