import React, { useEffect, useState } from 'react';

interface ProductionStatusProps {
  productName: string;
}

export const ProductionStatusFunctional: React.FC<ProductionStatusProps> = ({ productName }) => {
  const [productionStatus, setProductionStatus] = useState('Initializing production...');
  const [updateMessage, setUpdateMessage] = useState('');

  useEffect(() => {
   
    setUpdateMessage('Updating production...');

    const timeout = setTimeout(() => {
      setProductionStatus('Production in progress');
      setUpdateMessage('');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [productName]);

  return (
    <div>
      <h2>Production status {productName}:</h2>
      <p>{productionStatus}</p>
      {updateMessage && <p>{updateMessage}</p>}
    </div>
  );
};
