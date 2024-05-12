import React from "react";
import { useBearStore } from "../stores/bears.store";

const StockDisplay: React.FC = () => {
  const stock = useBearStore((state) => state.stock);

  return <div>Stock: {stock}</div>;
};

export default StockDisplay;
