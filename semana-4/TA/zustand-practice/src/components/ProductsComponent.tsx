import React from "react";
import { useBear } from "../stores/bears.store";

const Product: React.FC = () => {
  const productId = React.useRef<number>(Math.random()).current; // Generar un ID único para cada instancia de Product
  const { produce, distribute, stock } = useBear((state) => ({
    produce: state.produce,
    distribute: state.distribute,
    stock: state.stock[productId], // Accediendo al stock individual de este producto
  }));

  const handleProduce = () => {
    produce(productId, 1); // Puedes cambiar la cantidad según las necesidades
  };

  const handleDistribute = () => {
    distribute(productId, 1); // Puedes cambiar la cantidad según las necesidades
  };

  return (
    <div>
      <h2>Product {productId}</h2>
      <button onClick={handleProduce}>Produce 1 Product</button>
      <button onClick={handleDistribute}>Distribute 1 Product</button>
      <div>Stock: {stock}</div>
    </div>
  );
};
export default Product;
