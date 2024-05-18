import React, { useState, useEffect } from "react";

const Example9: React.FC = () => {
  const [count, setCount] = useState(0);
  const [derivedCount, setDerivedCount] = useState(0);

  useEffect(() => {
    setDerivedCount(count + 1);
  }, [count]);

  return (
    <div>
      <div onClick={() => setCount(count + 1)}>Count: {count}</div>
      <div>Derived Count: {derivedCount}</div>
    </div>
  );
};

export default Example9;
//Correction
//const derivedCount = count + 1;
