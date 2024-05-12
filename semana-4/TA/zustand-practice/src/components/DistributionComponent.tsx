import React from "react";
import { useBearStore } from "../stores/bears.store";

const DistributeButton: React.FC = () => {
  const distribute = useBearStore((state) => state.distribute);

  const handleDistribute = () => {
    distribute(1); // Puedes cambiar la cantidad según las necesidades
  };

  return <button onClick={handleDistribute}>Distribute 1 Product</button>;
};

export default DistributeButton;
