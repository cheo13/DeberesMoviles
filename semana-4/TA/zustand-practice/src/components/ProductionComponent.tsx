import React from "react";
import { useBearStore } from "../stores/bears.store";

const ProduceButton: React.FC = () => {
  const produce = useBearStore((state) => state.produce);

  const handleProduce = () => {
    produce(1); // Puedes cambiar la cantidad
  };

  return <button onClick={handleProduce}>Produce 1 Product</button>;
};

export default ProduceButton;
