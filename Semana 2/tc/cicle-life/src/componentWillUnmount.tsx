import React, { useEffect } from 'react';

interface ProductionStatusProps {
  productName: string;
  stopProduction: () => void;
}

export const ProductionStatusUnmount: React.FC<ProductionStatusProps> = ({ productName, stopProduction }) => {
  useEffect(() => {
   
    return () => {
      
    };
  }, []);

  return (
    <div>
      <h2>Stopping production of {productName}...</h2>
      <button onClick={stopProduction}>Stop production</button>
    </div>
  );
};
