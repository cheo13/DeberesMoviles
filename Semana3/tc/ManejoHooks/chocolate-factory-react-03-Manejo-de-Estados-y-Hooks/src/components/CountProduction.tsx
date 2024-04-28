
// Un contador para utilizar el Hook useState y useEffect con un 
// botón que permita al gerente aumentar la producción y ver como 
// aumenta la ganancia. 

import React, { useState, useEffect } from 'react';

const ProductionCounter: React.FC = () => {
  const [production, setProduction] = useState<number>(0);
  const [revenue, setRevenue] = useState<number>(0);

  useEffect(() => {
    
    const newRevenue = production * 150; 
    setRevenue(newRevenue);
  }, [production]);

  const increaseProduction = () => {
    
    setProduction(production + 1);
  };

  return (
    <div style={{ 
        backgroundColor: 'coral',
        padding: '40px',
        borderRadius: '8px',
        maxWidth: '300px',
        margin: '40px',
        marginLeft: '0px',
      }}>
      <h2>Production Counter</h2>
      <p>Production: {production}</p>
      <p>Revenue: {revenue}</p>
      <button onClick={increaseProduction}>Increase Production</button>
    </div>
  );
};

export default ProductionCounter;
